import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const offerwalls = [
  {
    name: "BitLabs",
    description:
      "Great offerwall with good payout and screenout rewards. Highly recommended to try out!",
    rating: 4,
    recommended: true,
    url: "https://www.bitlabs.ai/"
  },
  {
    name: "CPXResearch",
    description:
      "One of the best offerwalls, even pays you for disqualifications and feedback. Recommended to try it out!",
    rating: 4,
    recommended: true,
    url: "https://www.cpx-research.com/"
  },
  {
    name: "TheoremReach",
    description:
      "TheoremReach is the best offerwall right now. They pay you even if you disqualify from a task which makes it one of the most popular offerwall!",
    rating: 4,
    recommended: true,
    url: "https://www.theoremreach.com/"
  },
  {
    name: "inBrain",
    description:
      "Acquired and replaced by the previous PeanutLabs offerwall. Should have better access to surveys.",
    rating: 4,
    recommended: false,
    url: "https://www.inbrain.ai/"
  },
  {
    name: "Pollfish",
    description:
      "Complete easy surveys and earn Bucksify Tokens. Pollfish is unique among all.",
    rating: 4,
    recommended: false,
    url: "https://www.pollfish.com/"
  }
];

const OfferwallPage = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Offerwalls</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {offerwalls.map((offer, index) => (
          <Card key={index} className="bg-gray-800 border border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{offer.name}</h2>
                {offer.recommended && <Badge>RECOMMENDED</Badge>}
              </div>
              <div className="flex items-center text-yellow-400 mb-2">
                {Array.from({ length: offer.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="mr-1" />
                ))}
              </div>
              <p className="text-sm text-gray-300 mb-4">{offer.description}</p>
              <Button
                onClick={() => window.open(offer.url, "_blank")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Open {offer.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OfferwallPage;
