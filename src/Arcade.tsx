import './App.css'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import GlobeImage from "./assets/globe.png";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Arcade() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <br />
            <br />
            <br />
            <div>
                <h1 className="fade-in">Arcade</h1>
                <br />
                <h3 className="fade-in-delay">Explore Mini-Projects Here</h3>
            </div>
            <br />
            <div className="fade-in-delay-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 p-5">
                <Card className="relative mx-auto w-full max-w-sm pt-0">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                    <img
                        src={GlobeImage}
                        alt="Event cover"
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardTitle>Current Events Globe</CardTitle>
                        <CardDescription>
                            A mini-project that displays a Cesium globe with current event markers.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button disabled={isMobile} className="w-full cursor-pointer" onClick={() => navigate('/arcade/cesium')}>{isMobile ? 'Compatible with PC Only' : 'View Project'}</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default Arcade;
