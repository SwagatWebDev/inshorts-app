import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { NEWS_DATA } from "../utils/constants";

const NewsCardList = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const [touchStartY, setTouchStartY] = useState(0);

    const newsData = NEWS_DATA;

    useEffect(() => {
        const handleScroll = (e) => {
            if (!scrolling) {
                const direction = e.deltaY > 0 ? 'down' : 'up';
                if (direction === 'down' && currentIndex < newsData.length - 1) {
                    setCurrentIndex(prevIndex => prevIndex + 1); // Scroll down
                } else if (direction === 'up' && currentIndex > 0) {
                    setCurrentIndex(prevIndex => prevIndex - 1); // Scroll up
                }
                setScrolling(true);
                setTimeout(() => setScrolling(false), 800); // Adjust scroll debounce time
            }
        };

        const handleTouchStart = (e) => {
            setTouchStartY(e.touches[0].clientY);
        };

        const handleTouchEnd = (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchEndY - touchStartY;
            if (Math.abs(deltaY) > 50) { // Adjust swipe sensitivity as needed
                if (deltaY > 0 && currentIndex > 0) {
                    setCurrentIndex(prevIndex => prevIndex - 1); // Swipe up
                } else if (deltaY < 0 && currentIndex < newsData.length - 1) {
                    setCurrentIndex(prevIndex => prevIndex + 1); // Swipe down
                }
            }
        };

        document.body.addEventListener('wheel', handleScroll);
        document.body.addEventListener('touchstart', handleTouchStart);
        document.body.addEventListener('touchend', handleTouchEnd);

        return () => {
            document.body.removeEventListener('wheel', handleScroll);
            document.body.removeEventListener('touchstart', handleTouchStart);
            document.body.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentIndex, newsData.length, scrolling, touchStartY]);

    return (
        <div className="overflow-hidden">
            <div className="flex justify-center">
                {newsData[currentIndex] && (
                    <NewsCard
                        imageUrl={newsData[currentIndex].imageUrl}
                        title={newsData[currentIndex].title}
                        details={newsData[currentIndex].details}
                        link={newsData[currentIndex].link}
                        shortDetails={newsData[currentIndex].shortDetails}
                        className="transition-opacity duration-1000 ease-in-out" // Adjust transition duration
                    />
                )}
            </div>
        </div>
    );
};

export default NewsCardList;
