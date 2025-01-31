import React, { useState } from 'react';
import "./styles.css";

const events = [
    { imageUrl: 'https://s3-alpha-sig.figma.com/img/9ddc/1faf/414a9d7e035bfc14f48fde16e41e8a28?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V3NCUUrgmZPKb0a5KVjL3xM2q0wilxLNb7fGwJNDADXHJ7j2-s3nX89B9KRkniUeCbN0D48OdS8zLrNxek8Q0efd4~evKF9SLpcZeMXUGnXS0r2TPgmbmHGnlbIvhoAFUeqV3S3DPD6R67kAQ83pjqQfdcYzs5uj9iNWmV7W8z2FllnMN27n~fu~u~RVM9OaFZazwuVHv4czFijqC2pEFxkLqIqOQVgZXsvwMXD24gqPwz6Mhet8vwvz8i-Z4IB1jAVpwOanYpmym8X4MnJnLhRsHRRAqpwTmZWWDV2X5b2RFRWh5yYr9AqH2~ISUbcUZ6NUwhwJxrsdCrAkbBZ92w__', title: 'Tên sự kiện 1' },
    { imageUrl: 'https://s3-alpha-sig.figma.com/img/9ddc/1faf/414a9d7e035bfc14f48fde16e41e8a28?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V3NCUUrgmZPKb0a5KVjL3xM2q0wilxLNb7fGwJNDADXHJ7j2-s3nX89B9KRkniUeCbN0D48OdS8zLrNxek8Q0efd4~evKF9SLpcZeMXUGnXS0r2TPgmbmHGnlbIvhoAFUeqV3S3DPD6R67kAQ83pjqQfdcYzs5uj9iNWmV7W8z2FllnMN27n~fu~u~RVM9OaFZazwuVHv4czFijqC2pEFxkLqIqOQVgZXsvwMXD24gqPwz6Mhet8vwvz8i-Z4IB1jAVpwOanYpmym8X4MnJnLhRsHRRAqpwTmZWWDV2X5b2RFRWh5yYr9AqH2~ISUbcUZ6NUwhwJxrsdCrAkbBZ92w__', title: 'Tên sự kiện 2' },
    { imageUrl: 'https://s3-alpha-sig.figma.com/img/9ddc/1faf/414a9d7e035bfc14f48fde16e41e8a28?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V3NCUUrgmZPKb0a5KVjL3xM2q0wilxLNb7fGwJNDADXHJ7j2-s3nX89B9KRkniUeCbN0D48OdS8zLrNxek8Q0efd4~evKF9SLpcZeMXUGnXS0r2TPgmbmHGnlbIvhoAFUeqV3S3DPD6R67kAQ83pjqQfdcYzs5uj9iNWmV7W8z2FllnMN27n~fu~u~RVM9OaFZazwuVHv4czFijqC2pEFxkLqIqOQVgZXsvwMXD24gqPwz6Mhet8vwvz8i-Z4IB1jAVpwOanYpmym8X4MnJnLhRsHRRAqpwTmZWWDV2X5b2RFRWh5yYr9AqH2~ISUbcUZ6NUwhwJxrsdCrAkbBZ92w__', title: 'Tên sự kiện 3' },
    { imageUrl: 'https://s3-alpha-sig.figma.com/img/9ddc/1faf/414a9d7e035bfc14f48fde16e41e8a28?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V3NCUUrgmZPKb0a5KVjL3xM2q0wilxLNb7fGwJNDADXHJ7j2-s3nX89B9KRkniUeCbN0D48OdS8zLrNxek8Q0efd4~evKF9SLpcZeMXUGnXS0r2TPgmbmHGnlbIvhoAFUeqV3S3DPD6R67kAQ83pjqQfdcYzs5uj9iNWmV7W8z2FllnMN27n~fu~u~RVM9OaFZazwuVHv4czFijqC2pEFxkLqIqOQVgZXsvwMXD24gqPwz6Mhet8vwvz8i-Z4IB1jAVpwOanYpmym8X4MnJnLhRsHRRAqpwTmZWWDV2X5b2RFRWh5yYr9AqH2~ISUbcUZ6NUwhwJxrsdCrAkbBZ92w__', title: 'Tên sự kiện 4' },
    { imageUrl: 'https://s3-alpha-sig.figma.com/img/9ddc/1faf/414a9d7e035bfc14f48fde16e41e8a28?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V3NCUUrgmZPKb0a5KVjL3xM2q0wilxLNb7fGwJNDADXHJ7j2-s3nX89B9KRkniUeCbN0D48OdS8zLrNxek8Q0efd4~evKF9SLpcZeMXUGnXS0r2TPgmbmHGnlbIvhoAFUeqV3S3DPD6R67kAQ83pjqQfdcYzs5uj9iNWmV7W8z2FllnMN27n~fu~u~RVM9OaFZazwuVHv4czFijqC2pEFxkLqIqOQVgZXsvwMXD24gqPwz6Mhet8vwvz8i-Z4IB1jAVpwOanYpmym8X4MnJnLhRsHRRAqpwTmZWWDV2X5b2RFRWh5yYr9AqH2~ISUbcUZ6NUwhwJxrsdCrAkbBZ92w__', title: 'Tên sự kiện 5' }
];

function EventsOverview() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };

    // Calculate the range of events to display
    const displayedEvents = events.slice(currentIndex, currentIndex + 4).concat(events.slice(0, Math.max(0, currentIndex + 4 - events.length)));

    return (
        <section>
            <h2 className='text-2xl font-bold mb-4'>Tổng kết các sự kiện đã qua</h2>
            <div className='slider'>
                <button onClick={prevImage} className='prev-button'>Previous</button>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ml-auto mr-auto mb-10 w-2/3 gap-5 h-64 overflow-hidden'>
                    {displayedEvents.map((event, index) => (
                        <div 
                            className="relative bg-cover bg-center h-64 rounded-lg overflow-hidden shadow-md flex p-2 text-white items-end" 
                            style={{ backgroundImage: `linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.6)), url(${event.imageUrl})` }} 
                            key={index}
                        >
                            <h3 className='font-medium'>{event.title}</h3>
                        </div>
                    ))}
                </div>
                <button onClick={nextImage} className='next-button'>Next</button>
            </div>
        </section>
    );
}

export default EventsOverview;