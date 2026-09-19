import React from "react";
import { Cartesian3, Ion, IonImageryProvider } from "cesium";
import { Viewer, Entity, ImageryLayer } from "resium";
import { createEmojiImage, extractCoordinates, extractLocation, getCurrentEvents, jitterDuplicateCoordinates } from "@/helpers/generateCurrentEvents";
import type { Article, Icons, Location } from "./types/types";
Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN as string;

const categoryIcons: Icons = {
  world: "🌍",
  business: "💼",
  legal: "💼",
  technology: "💻",
  science: "🔬",
  health: "🩺",
  sports: "⚽",
  entertainment: "🎬",
  lifestyle: "🏝️",
  food: "🍔",
  programming: "👨‍💻",
  regional: "📍",
  general: "📰"
};

export default class Cesium extends React.PureComponent {
  state = {
    currentEvents: [],
    locations: [],
  };

  componentDidMount() {
    getCurrentEvents().then(async (data) => {
      const locationPromises = data.news.map(async (article: Article) => {
        let place = extractLocation(
          article.title + " " + article.description + " " + article.url
        );
        
        if (!place) return null;
        const geo = await extractCoordinates(place);

        if (!geo) return null;


        const priority = ["world", "business", "technology"];

        const mainCategory = (
          article.category.find(cat => priority.includes(cat)) ||
          article.category[0] ||
          "general"
        ) as keyof Icons;
        const image = mainCategory in categoryIcons
          ? createEmojiImage(categoryIcons[mainCategory])
          : createEmojiImage("🌍");

        return {
          place,
          lat: Number(geo.lat),
          lon: Number(geo.lon),
          article,
          icon: image,
          mainCategory
        };
      });

      let locations = (await Promise.all(locationPromises)).filter(Boolean);
      locations = jitterDuplicateCoordinates(locations);
      this.setState({ locations }, () => {
        console.log("locations ready:", this.state.locations);
      });      
    });
  }

  render() {
    console.log("render locations:", this.state.locations);
    return (
      <Viewer full>
        <ImageryLayer
          imageryProvider={IonImageryProvider.fromAssetId(3, {})}
        />
        {this.state.locations.map((loc: Location, i) => (
          <Entity
            name={loc.article?.title}
            billboard={{
              image: loc.icon,
              width: 48,
              height: 48,
            }}
            description={`
              <div style="
                background: black;
                color: white;
                padding: 10px;
                border-radius: 4px;
              ">
                <h3>${loc.article?.title}</h3>
                <p>${loc.article?.description}</p>
                <a href="${loc.article?.url}" target="_blank" style="color: #4da3ff;">
                  Read full article
                </a>
              </div>
            `}
            key={i}
            position={Cartesian3.fromDegrees(loc.lon, loc.lat)}
          />
        ))}
      </Viewer>
    );
  }
}
