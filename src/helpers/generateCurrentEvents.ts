import nlp from "compromise";
import locations from "../lib/data/location-dictionary.json";
import type { Location } from "@/lib/types/types";

export async function getCurrentEvents() {
    const res = await fetch('https://api.currentsapi.services/v1/latest-news', {
        headers: {
            'Authorization': import.meta.env.VITE_NEWS_API_KEY
        }
    });
    return await res.json();
}

export function extractLocation(text: string) {
    const doc = nlp(text);
    let places = doc.places().out("array");
    if (places?.length == 0) {
        for (const [entity, location] of Object.entries(locations)) {
            if (text.toLowerCase().includes(entity.toLowerCase())) {
                return location;
            }
        } 
        return "New York City";
    };
    return places[0]
}

export async function extractCoordinates(place: string) {
    const API_KEY = import.meta.env.VITE_GEOCODING_API_KEY;

    const res = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(place)}&key=${API_KEY}`
    );

    const data = await res.json();

    if (!data.results || data.results.length === 0) {
        return null;
    }

    const result = data.results[0];

    return {
        lat: result.geometry.lat,
        lon: result.geometry.lng,
        formatted: result.formatted,
    };
}

export function createEmojiImage(emoji: string) {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.font = "48px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(emoji, 32, 32);

    return canvas;
}

export function jitterDuplicateCoordinates(items: Location[]) {
    const coordMap = new Map();

    return items.map((item) => {
        const lat = item.lat;
        const lon = item.lon;

        // Skip invalid coordinates
        if (
            typeof lat !== "number" ||
            typeof lon !== "number"
        ) {
            return item;
        }

        const key = `${lat.toFixed(6)},${lon.toFixed(6)}`;

        const duplicateCount = coordMap.get(key) || 0;
        coordMap.set(key, duplicateCount + 1);

        // Keep first item unchanged
        if (duplicateCount === 0) {
            return item;
        }

        // Circular jitter
        const offset = 0.05;
        const angle = (duplicateCount * Math.PI * 2) / 8;

        const jitteredLat = lat + Math.sin(angle) * offset;
        const jitteredLon = lon + Math.cos(angle) * offset;
        return {
            ...item,
            lat: jitteredLat,
            lon: jitteredLon,
        };
    });
}