import { useEffect, useRef, useState } from "react";

export default function InfiniteHorizontalScroll({ items, speed = 1 }) {
    const containerRef = useRef(null);
    const [listItems, setListItems] = useState([...items, ...items]);

    useEffect(() => {
        setListItems([...items, ...items]);
    }, [items]);

    useEffect(() => {
        const container = containerRef.current;

        container.scrollLeft = container.scrollWidth / 2;
        const scrollSpeed = speed;

        let animationFrameId;

        const scroll = () => {
            container.scrollLeft += scrollSpeed;

            if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
                container.scrollLeft = container.scrollWidth / 2 - container.offsetWidth;
            } else if (container.scrollLeft === 0) {
                container.scrollLeft = container.scrollWidth / 2;
            }

            animationFrameId = requestAnimationFrame(scroll); // Utiliser requestAnimationFrame pour animer
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId); // Nettoyage
    }, [speed, listItems]);

    return (
        <div
            ref={containerRef}
            style={{
                display: "flex",
                overflowX: "hidden",
                whiteSpace: "nowrap",
                width: "100%",
            }}
        >
            {listItems.map((item, index) => (
                <div
                    key={index}
                    style={{
                        flex: "0 0 auto",
                        padding: "5px",
                        minWidth: "150px",
                        textAlign: "center",
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}
