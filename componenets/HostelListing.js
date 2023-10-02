import React, { useState } from "react";
import CityTabs from "./CityTabs";
import PropertyCard from "./PropertyCards"; // Assuming you have a PropertyCard component

function HotelListing(props) {
const newproperties = [
        // Add new property objects here
        // Example:
        { 
            id: 1,
            image:"/images/1.jpeg",
            cardMode:"for rent",
            description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
            popularMode:true,
            location:"8558 pecan state",
            name: "RCE theaters, 907 backford Dr handerson, NC 27536",
            price:"7255",
            roomType:"3 room",
            bedType:"1 bed",
            bathroomType:"1 bath",
            area:"732 sft"

        },
        { 
            id: 2,
            image:"/images/2.jpeg",
            cardMode:"for rent",
            description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
            popularMode:false,
            location:"8558 pecan state",
            name: "RCE theaters, 907 backford Dr handerson, NC 27536",
            price:"7255",
            roomType:"3 room",
            bedType:"1 bed",
            bathroomType:"1 bath",
            area:"732 sft"

        },
        { 
            id: 3,
            image:"/images/3.jpeg",
            description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
            cardMode:"for rent",
            popularMode:true,
            location:"8558 pecan state",
            name: "RCE theaters, 907 backford Dr handerson, NC 27536",
            price:"7255",
            roomType:"3 room",
            bedType:"1 bed",
            bathroomType:"1 bath",
            area:"732 sft"

        },
        { 
            id: 4,
            image:"/images/4.jpeg",
            description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
            cardMode:"for rent",
            popularMode:false,
            location:"8558 pecan state",
            name: "RCE theaters, 907 backford Dr handerson, NC 27536",
            price:"7255",
            roomType:"3 room",
            bedType:"1 bed",
            bathroomType:"1 bath",
            area:"732 sft"

        },
        { 
            id: 5,
            image:"/images/5.jpeg",
            description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
            cardMode:"for rent",
            popularMode:false,
            location:"8558 pecan state",
            name: "RCE theaters, 907 backford Dr handerson, NC 27536",
            price:"7255",
            roomType:"3 room",
            bedType:"1 bed",
            bathroomType:"1 bath",
            area:"732 sft"

        },
        { 
            id: 6,
            image:"/images/6.jpeg",
            description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
            cardMode:"for rent",
            popularMode:true,
            location:"8558 pecan state",
            name: "RCE theaters, 907 backford Dr handerson, NC 27536",
            price:"7255",
            roomType:"3 room",
            bedType:"1 bed",
            bathroomType:"1 bath",
            area:"732 sft"

        },
];
const cityNames = ["New York", "Mumbai", "Paris", "London"];

  const [activeCity, setActiveCity] = useState(cityNames[0]);
  const [properties, setProperties] = useState(newproperties); // Initialize with an empty array

  // Simulated API call to fetch more properties
  const fetchMoreProperties = () => {

    // Simulate an API call with a setTimeout (replace with your actual API call)
    setTimeout(() => {
      const newProperties = [
        // Add new property objects here
        // Example:
        { 
            id: 1,
            image:"/images/1.jpeg",
            description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
            cardMode:"for rent",
            popularMode:true,
            location:"8558 pecan state",
            name: "RCE theaters, 907 backford Dr handerson, NC 27536",
            price:"7255",
            roomType:"3 room",
            bedType:"1 bed",
            bathroomType:"1 bath",
            area:"732 sft"

        },
        { 
            id: 2,
            image:"/images/2.jpeg",
            cardMode:"for rent",
            description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
            popularMode:false,
            location:"8558 pecan state",
            name: "RCE theaters, 907 backford Dr handerson, NC 27536",
            price:"7255",
            roomType:"3 room",
            bedType:"1 bed",
            bathroomType:"1 bath",
            area:"732 sft"

        },
        { 
            id: 3,
            image:"/images/3.jpeg",
            description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
            cardMode:"for rent",
            popularMode:true,
            location:"8558 pecan state",
            name: "RCE theaters, 907 backford Dr handerson, NC 27536",
            price:"7255",
            roomType:"3 room",
            bedType:"1 bed",
            bathroomType:"1 bath",
            area:"732 sft"

        },
        { 
            id: 4,
            image:"/images/4.jpeg",
            description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
            cardMode:"for rent",
            popularMode:false,
            location:"8558 pecan state",
            name: "RCE theaters, 907 backford Dr handerson, NC 27536",
            price:"7255",
            roomType:"3 room",
            bedType:"1 bed",
            bathroomType:"1 bath",
            area:"732 sft"

        },
        { 
            id: 5,
            image:"/images/5.jpeg",
            description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
            cardMode:"for rent",
            popularMode:false,
            location:"8558 pecan state",
            name: "RCE theaters, 907 backford Dr handerson, NC 27536",
            price:"7255",
            roomType:"3 room",
            bedType:"1 bed",
            bathroomType:"1 bath",
            area:"732 sft"

        },
        { 
            id: 6,
            image:"/images/6.jpeg",
            description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
            cardMode:"for rent",
            popularMode:true,
            location:"8558 pecan state",
            name: "RCE theaters, 907 backford Dr handerson, NC 27536",
            price:"7255",
            roomType:"3 room",
            bedType:"1 bed",
            bathroomType:"1 bath",
            area:"732 sft"

        },
      ];

      setProperties([...properties, ...newProperties]);
    }, 1000); // Simulate a 1-second delay
  };

  const loadMoreProperties = () => {
      fetchMoreProperties()
  };

  return (
    <div>
      <div className="header">
        <CityTabs activeCity={activeCity} setActiveCity={setActiveCity} cityNames={cityNames} />
      <button>show more</button>
      </div>
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <button className="read-more" onClick={loadMoreProperties} style={{marginLeft:"990px",marginTop:"10px",marginBottom:"20px"}}>view more</button>
    </div>
  );
}

export default HotelListing;
