import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestrauntContainer
 *  - RestrauntCard
 *      - Img
 *      - Name of restraunt, Star Rating, Cuisine, etc.
 *      - Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const resList = [
  {
    "info": {
      "id": "157695",
      "name": "Varalakshmi Tiffins",
      "cloudinaryImageId": "8523266de1213e8ea57e5df4eedf747e",
      "locality": "Kothapet & Dilsukhnagar",
      "areaName": "Dilsukhnagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "157695",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3900
      },
      "parentId": "6482",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-20 11:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-b06b66d9-325d-41f9-9596-826a8fb32ea9"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/varalakshmi-tiffins-kothapet-and-dilsukhnagar-hyderabad-157695",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "11547",
      "name": "Rambharose - Bhattad Ki Idli",
      "cloudinaryImageId": "epmpoc9ubtfuk4zwcwgi",
      "locality": "Kutbi Guda",
      "areaName": "Kachiguda",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "11547",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2700
      },
      "parentId": "166509",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-20 15:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-b06b66d9-325d-41f9-9596-826a8fb32ea9"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/rambharose-bhattad-ki-idli-kutbi-guda-kachiguda-hyderabad-11547",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "495772",
      "name": "Cafe Niloufer",
      "cloudinaryImageId": "e0c63e989612732c70da6d1bb6984850",
      "locality": "Old Mla Quarters Road",
      "areaName": "Himayath Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Bakery",
        "Beverages",
        "Snacks",
        "Desserts"
      ],
      "avgRating": 4.5,
      "feeDetails": {
        "restaurantId": "495772",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2700
      },
      "parentId": "9152",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 00:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-b06b66d9-325d-41f9-9596-826a8fb32ea9"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cafe-niloufer-old-mla-quarters-road-himayath-nagar-hyderabad-495772",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "8663",
      "name": "Nrs Nandini Sudha",
      "cloudinaryImageId": "v69nznqnbvert2bysocm",
      "locality": "Chikkadpally road",
      "areaName": "Himayatnagar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Juices",
        "Beverages"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "8663",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2700
      },
      "parentId": "19252",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-20 21:50:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-b06b66d9-325d-41f9-9596-826a8fb32ea9"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nrs-nandini-sudha-chikkadpally-road-himayatnagar-hyderabad-8663",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "10258",
      "name": "Bheemas Grand",
      "cloudinaryImageId": "schjsfazzjcaaywwuap7",
      "locality": "Road No 10",
      "areaName": "Banjara Hills",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.1,
      "veg": true,
      "feeDetails": {
        "restaurantId": "10258",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 5100
      },
      "parentId": "1842",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 6.9,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "6.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-20 21:30:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-b06b66d9-325d-41f9-9596-826a8fb32ea9"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bheemas-grand-road-no-10-banjara-hills-hyderabad-10258",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "122882",
      "name": "Sri Sai Raghavendra Udupi Veg",
      "cloudinaryImageId": "nitlydb3aql1df311rw6",
      "locality": "Krishnaveni Nagar",
      "areaName": "Dilsukhnagar",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "South Indian",
        "Juices",
        "Ice Cream"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "122882",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 5100
      },
      "parentId": "19667",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 6.1,
        "serviceability": "SERVICEABLE",
        "slaString": "32 mins",
        "lastMileTravelString": "6.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 00:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-b06b66d9-325d-41f9-9596-826a8fb32ea9"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sri-sai-raghavendra-udupi-veg-krishnaveni-nagar-dilsukhnagar-hyderabad-122882",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "27739",
      "name": "Cafe Niloufer Classic",
      "cloudinaryImageId": "67ca79626844963d6979835661ac45a0",
      "locality": "Lakdikapul",
      "areaName": "Redhills",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Bakery",
        "Beverages",
        "Snacks",
        "Desserts"
      ],
      "avgRating": 4.5,
      "feeDetails": {
        "restaurantId": "27739",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3900
      },
      "parentId": "19273",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 00:30:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-b06b66d9-325d-41f9-9596-826a8fb32ea9"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cafe-niloufer-classic-lakdikapul-redhills-hyderabad-27739",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "214809",
      "name": "Hotel Niagara - Since 1969",
      "cloudinaryImageId": "btea7jwuwkbgd0nebcyd",
      "locality": "Himayath Nagar",
      "areaName": "Chaderghat",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Biryani",
        "Kebabs",
        "Mughlai"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "214809",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2700
      },
      "parentId": "19244",
      "avgRatingString": "3.8",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-20 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-b06b66d9-325d-41f9-9596-826a8fb32ea9"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-niagara-since-1969-himayath-nagar-chaderghat-hyderabad-214809",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "399611",
      "name": "Hotel Woodside (Veg)",
      "cloudinaryImageId": "ya4rln9ou59x3ghvcdyh",
      "locality": "Himayath Nagar",
      "areaName": "Kacheguda",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "399611",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2700
      },
      "parentId": "247418",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-20 22:30:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-b06b66d9-325d-41f9-9596-826a8fb32ea9"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-woodside-veg-himayath-nagar-kacheguda-hyderabad-399611",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
];

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="app-logo" />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

const RestaurantCard = (props) => {
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = props?.resData?.info;
  return (
    <div className="res-card">
      <div className="res-logo">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="res-image" />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        {
          resList.map((restaurant) => <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)
        }
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>Company Name</li>
        <li>&copy; Hungry Bundl Technologies Pvt. Ltd</li>
      </ul>
      <ul>
        <li>Help & Support</li>
        <li>Partner with Us</li>
        <li>Ride with us</li>
      </ul>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); // Whatever happens in react, it will happen inside the root

root.render(<AppLayout />);