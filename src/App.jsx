import React from "react";
import CardDetails from "./CardDetails";

function App() {
  let data = [
    {
      plan: "FREE",
      price: 0,
      user: "Single User",
      storage: "5 GB",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subDomain: "Free Subdomain",
      reports: "Monthly Status Reports",
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5 Users",
      storage: "50 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subDomain: "Free Subdomain",
      reports: "Monthly Status Reports",
    },
    {
      plan: "PRO",
      price: 49,
      user: "Unlimited Users",
      storage: "150 GB",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subDomain: "Free Subdomains",
      reports: "Monthly Status Reports",
    },
  ];
  return (
    <div>
      <h1 className="priceCardDetails">Price Details</h1>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              data.map((cardData) => {
                return <CardDetails price={cardData}/>
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;