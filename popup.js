// popup.js
document.addEventListener('DOMContentLoaded', function () {
    console.log("Popup script loaded.");

    // Send a message to the background script
    chrome.runtime.sendMessage({action: "performAction"}, (response) => {
        console.log("Response from background script:", response);
    });

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        console.log("Message received:", message);
        if (message.action === "changePopupContent") {
            console.log("Changing the popup content");
            // Change the content of the popup
            changePopupContent();
        }
    });

    async function changePopupContent() {
        const container = document.getElementById('content');
        container.innerHTML = '';
        const response = await fetchDataFromAPI();
        let sellerList = '<h1>Special offers from Awin</h1>' +
            '<ul id="myList">';

        response.data.forEach(item => {
            const productItem = document.createElement('li');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
<div>

<a href="${item.url}" target="_blank">
<div class="product-item">
<img src="/images/product-thumbnail.png" alt="${item.title}" class="product-image"/>
      <span class="product-name">${item.title}</span>
      <span class="product-price">${item.type}</span>
</div>
</a>     
</div>`;
            container.appendChild(productItem);

        });
        sellerList += '</ul>';
        // Add your logic to dynamically change the popup content
        // document.getElementById('content').innerHTML = sellerList;
    }

    async function fetchDataFromAPI() {
        // const apiUrl = 'https://squirrelled-fe-uat.vercel.app/api/awin/promotions';
        // const options = {
        //     method: 'POST',
        // }
        //body: JSON.stringify(data)
        //const response = await fetch(apiUrl);
        const response = {
            "data": [
                {
                    "promotionId": 2512579,
                    "type": "voucher",
                    "advertiser": {
                        "id": 2319,
                        "name": "boohoo.com UK & IE",
                        "joined": true
                    },
                    "title": "APP ONLY: Free Standard Delivery",
                    "description": "APP ONLY: Free Standard Delivery",
                    "terms": "Onsite",
                    "startDate": "2023-12-19",
                    "endDate": "2023-12-21",
                    "url": "https://www.boohoo.com/",
                    "urlTracking": "https://www.awin1.com/cread.php?awinmid=2319&awinaffid=873409&campaign=UK&ued=https%3A%2F%2Fwww.boohoo.com%2F",
                    "dateAdded": "2023-12-18",
                    "campaign": "UK",
                    "regions": {
                        "all": false,
                        "list": [
                            {
                                "name": "United Kingdom",
                                "countryCode": "GB"
                            }
                        ]
                    },
                    "voucher": {
                        "code": "XMASDEL",
                        "exclusive": false,
                        "attributable": false
                    }
                },
                {
                    "promotionId": 2512567,
                    "type": "voucher",
                    "advertiser": {
                        "id": 2319,
                        "name": "boohoo.com UK & IE",
                        "joined": true
                    },
                    "title": "APP ONLY: 25% Off Sitewide",
                    "description": "APP ONLY: 25% Off Sitewide",
                    "terms": "Onsite",
                    "startDate": "2023-12-19",
                    "endDate": "2023-12-20",
                    "url": "https://www.boohoo.com/",
                    "urlTracking": "https://www.awin1.com/cread.php?awinmid=2319&awinaffid=873409&campaign=UK&ued=https%3A%2F%2Fwww.boohoo.com%2F",
                    "dateAdded": "2023-12-18",
                    "campaign": "UK",
                    "regions": {
                        "all": false,
                        "list": [
                            {
                                "name": "United Kingdom",
                                "countryCode": "GB"
                            }
                        ]
                    },
                    "voucher": {
                        "code": "APPY25",
                        "exclusive": false,
                        "attributable": false
                    }
                },
                {
                    "promotionId": 2512301,
                    "type": "promotion",
                    "advertiser": {
                        "id": 1205,
                        "name": "Hamleys",
                        "joined": true
                    },
                    "title": "10% Off PS5 at Hamleys",
                    "description": "Get 10% Of The PS5 at Hamleys",
                    "terms": "",
                    "startDate": "2023-12-18",
                    "endDate": "2023-12-22",
                    "url": "https://www.hamleys.com/playstation-5-console-slim",
                    "urlTracking": "https://www.awin1.com/cread.php?awinmid=1205&awinaffid=873409&ued=https%3A%2F%2Fwww.hamleys.com%2Fplaystation-5-console-slim",
                    "dateAdded": "2023-12-18",
                    "campaign": "",
                    "regions": {
                        "all": false,
                        "list": [
                            {
                                "name": "United Kingdom",
                                "countryCode": "GB"
                            }
                        ]
                    }
                },
                {
                    "promotionId": 2512153,
                    "type": "promotion",
                    "advertiser": {
                        "id": 2082,
                        "name": "LOOKFANTASTIC UK",
                        "joined": true
                    },
                    "title": "LOOKFANTASTIC Christmas Fragrance and Beauty Edit (Includes a digital £55 voucher!)",
                    "description": "Find your party fragrance with 5 discovery scents and 4 beauty heroes. Plus, a £55 voucher to spend on a full-size scent or beauty product from this box!",
                    "terms": "While stocks last.",
                    "startDate": "2023-12-18",
                    "endDate": "2023-12-31",
                    "url": "https://www.lookfantastic.com/beauty-box/lookfantastic-christmas-fragrance-and-beauty-edit-includes-a-digital-55-voucher/14237343.html",
                    "urlTracking": "https://www.awin1.com/cread.php?awinmid=2082&awinaffid=873409&ued=https%3A%2F%2Fwww.lookfantastic.com%2Fbeauty-box%2Flookfantastic-christmas-fragrance-and-beauty-edit-includes-a-digital-55-voucher%2F14237343.html",
                    "dateAdded": "2023-12-18",
                    "campaign": "",
                    "regions": {
                        "all": true
                    }
                },
                {
                    "promotionId": 2511297,
                    "type": "promotion",
                    "advertiser": {
                        "id": 2041,
                        "name": "Boots.com",
                        "joined": true
                    },
                    "title": "£10 Tuesday - online only, whilst stocks last",
                    "description": "online only",
                    "terms": "Points events - excludes Dyson except supersonic/activity superstore/dropship and normal ts and cs",
                    "startDate": "2023-12-19",
                    "endDate": "2023-12-19",
                    "url": "https://www.boots.com/tuesday-offer",
                    "urlTracking": "https://www.awin1.com/cread.php?awinmid=2041&awinaffid=873409&ued=https%3A%2F%2Fwww.boots.com%2Ftuesday-offer",
                    "dateAdded": "2023-12-15",
                    "campaign": "",
                    "regions": {
                        "all": true
                    }
                },
                {
                    "promotionId": 2511075,
                    "type": "voucher",
                    "advertiser": {
                        "id": 7009,
                        "name": "boohooMAN.com",
                        "joined": true
                    },
                    "title": "FREE Standard Delivery (Everything Inc. Sale)\tMANFREE",
                    "description": "FREE Standard Delivery (Everything Inc. Sale)\tMANFREE",
                    "terms": "Onsite",
                    "startDate": "2023-12-15",
                    "endDate": "2024-01-07",
                    "url": "https://www.boohooman.com/",
                    "urlTracking": "https://www.awin1.com/cread.php?awinmid=7009&awinaffid=873409&campaign=UK&ued=https%3A%2F%2Fwww.boohooman.com%2F",
                    "dateAdded": "2023-12-15",
                    "campaign": "UK",
                    "regions": {
                        "all": false,
                        "list": [
                            {
                                "name": "United Kingdom",
                                "countryCode": "GB"
                            }
                        ]
                    },
                    "voucher": {
                        "code": "MANFREE",
                        "exclusive": false,
                        "attributable": false
                    }
                },
                {
                    "promotionId": 2511073,
                    "type": "voucher",
                    "advertiser": {
                        "id": 7009,
                        "name": "boohooMAN.com",
                        "joined": true
                    },
                    "title": "Extra 10% off - Everything (Inc. Sale)\tMAN10",
                    "description": "Extra 10% off - Everything (Inc. Sale)\tMAN10",
                    "terms": "Onsite",
                    "startDate": "2023-12-15",
                    "endDate": "2024-01-07",
                    "url": "https://www.boohooman.com/",
                    "urlTracking": "https://www.awin1.com/cread.php?awinmid=7009&awinaffid=873409&campaign=UK&ued=https%3A%2F%2Fwww.boohooman.com%2F",
                    "dateAdded": "2023-12-15",
                    "campaign": "UK",
                    "regions": {
                        "all": false,
                        "list": [
                            {
                                "name": "United Kingdom",
                                "countryCode": "GB"
                            }
                        ]
                    },
                    "voucher": {
                        "code": "MAN10",
                        "exclusive": false,
                        "attributable": false
                    }
                },
                {
                    "promotionId": 2511001,
                    "type": "promotion",
                    "advertiser": {
                        "id": 2515,
                        "name": "Clarks UK",
                        "joined": true
                    },
                    "description": "Up to 50% off even more styles",
                    "terms": "This promotion entitles you to a saving of up to 50% off selected adults and kids products in-store and online at www.clarks.com/en-gb/. \nSee prices marked. Subject to availability.\nThis discount applies to selected adults and kids products only.\nThis offer excludes foot gauges and shoe care products.\nThis offer is available for Home Delivery, Collect from Store and Collect+ (depending on your location).\nThis offer is valid from 00:01 (BST) on Friday, 8th December 2023 until 23:59 (GMT) on Sunday, 28th January 2024 online or in-store during store opening hours in the same period.\nThis offer shall not be used in conjunction with any other promotion, voucher or discount. We reserve the right to withdraw this offer at any time.\nThis offer is not available at www.clarksoutlet.co.uk, outlet stores, wholesale stockists, or any Clarks store outside the UK and ROI.\nPlease check the opening times of your local Clarks store before visiting, available here: www.clarks.com/en-gb/store-locator.",
                    "startDate": "2023-12-19",
                    "endDate": "2023-12-29",
                    "title": "Clarks End of Season Sale- up to 50% off - New Styles Added",
                    "url": "https://www.clarks.com/en-gb/sale/sale_uk-c",
                    "urlTracking": "https://www.awin1.com/cread.php?awinmid=2515&awinaffid=873409&ued=https%3A%2F%2Fwww.clarks.com%2Fen-gb%2Fsale%2Fsale_uk-c",
                    "dateAdded": "2023-12-15",
                    "campaign": "",
                    "regions": {
                        "all": true
                    }
                },
                {
                    "promotionId": 2510981,
                    "type": "voucher",
                    "advertiser": {
                        "id": 2005,
                        "name": "Just Eat – Find your flavour",
                        "joined": true
                    },
                    "title": "FESTIVE10",
                    "description": "Voucher Valid until 23:59 31 December 2023. £15 minimum spend applies. Voucher excludes grocery stores.Valid on orders in Edinburgh, Glasgow, Bristol, Belfast & Cardiff only.",
                    "terms": "T&Cs apply. See [https://www.just-eat.co.uk/info/2023-FESTIVE10-TERMS-AND-CONDITIONS] for more details.",
                    "startDate": "2023-12-15",
                    "endDate": "2023-12-31",
                    "url": "https://www.just-eat.co.uk/",
                    "urlTracking": "https://www.awin1.com/cread.php?awinmid=2005&awinaffid=873409&campaign=FESTIVE10&ued=https%3A%2F%2Fwww.just-eat.co.uk%2F",
                    "dateAdded": "2023-12-15",
                    "campaign": "FESTIVE10",
                    "regions": {
                        "all": true
                    },
                    "voucher": {
                        "code": "FESTIVE10",
                        "exclusive": false,
                        "attributable": false
                    }
                },
                {
                    "promotionId": 2510691,
                    "type": "promotion",
                    "advertiser": {
                        "id": 7009,
                        "name": "boohooMAN.com",
                        "joined": true
                    },
                    "title": "UK App Only: 50% off Going Out  AUTO",
                    "description": "UK App Only: 50% off Going Out  AUTO",
                    "terms": "Onsite",
                    "startDate": "2023-12-19",
                    "endDate": "2023-12-20",
                    "url": "https://www.boohooman.com/",
                    "urlTracking": "https://www.awin1.com/cread.php?awinmid=7009&awinaffid=873409&campaign=UK+App+Only&ued=https%3A%2F%2Fwww.boohooman.com%2F",
                    "dateAdded": "2023-12-15",
                    "campaign": "UK App Only",
                    "regions": {
                        "all": false,
                        "list": [
                            {
                                "name": "United Kingdom",
                                "countryCode": "GB"
                            }
                        ]
                    }
                },
                {
                    "promotionId": 2510685,
                    "type": "promotion",
                    "advertiser": {
                        "id": 7009,
                        "name": "boohooMAN.com",
                        "joined": true
                    },
                    "title": "STOCKING FILLERS   £5 & under",
                    "description": "STOCKING FILLERS   £5 & under",
                    "terms": "Onsite",
                    "startDate": "2023-12-18",
                    "endDate": "2023-12-22",
                    "url": "https://www.boohooman.com/",
                    "urlTracking": "https://www.awin1.com/cread.php?awinmid=7009&awinaffid=873409&campaign=Secondary+Campaign+UK&ued=https%3A%2F%2Fwww.boohooman.com%2F",
                    "dateAdded": "2023-12-15",
                    "campaign": "Secondary Campaign UK",
                    "regions": {
                        "all": false,
                        "list": [
                            {
                                "name": "United Kingdom",
                                "countryCode": "GB"
                            }
                        ]
                    }
                },
                {
                    "promotionId": 2510671,
                    "type": "voucher",
                    "advertiser": {
                        "id": 7009,
                        "name": "boohooMAN.com",
                        "joined": true
                    },
                    "title": "Delivery All Day  + 99p Delivery   XMASDEL",
                    "description": "Delivery All Day  + 99p Delivery   XMASDEL",
                    "terms": "Onsite",
                    "startDate": "2023-12-18",
                    "endDate": "2023-12-21",
                    "url": "https://www.boohooman.com/",
                    "urlTracking": "https://www.awin1.com/cread.php?awinmid=7009&awinaffid=873409&campaign=UK&ued=https%3A%2F%2Fwww.boohooman.com%2F",
                    "dateAdded": "2023-12-15",
                    "campaign": "UK",
                    "regions": {
                        "all": false,
                        "list": [
                            {
                                "name": "United Kingdom",
                                "countryCode": "GB"
                            }
                        ]
                    },
                    "voucher": {
                        "code": "XMASDEL",
                        "exclusive": false,
                        "attributable": false
                    }
                }
            ],
            "pagination": {
                "page": 1,
                "pageSize": 200,
                "total": 249
            }
        }

        //const data = await response.json();
        //console.log(data);
        return response;
    }
});

