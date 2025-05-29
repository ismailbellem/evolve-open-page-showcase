
import { Instagram, Twitter, ArrowUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face"
                alt="Alex Chen"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
            </div>
            
            <h1 className="text-4xl font-bold text-slate-800 mb-3">Alex Chen</h1>
            
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Author, Marathon Runner & Culinary Explorer. Sharing my current journey and favorite finds.
            </p>
            
            <div className="flex justify-center items-center gap-6 mb-4">
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors text-sm font-medium">
                alexchen.com
              </a>
            </div>
            
            <p className="text-sm text-slate-400">Last Updated: May 29, 2025</p>
          </div>

          {/* Content Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Currently Reading Module */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Currently Reading</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=60&h=90&fit=crop"
                      alt="Book cover"
                      className="w-12 h-18 object-cover rounded shadow-sm"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-700 text-sm">Atomic Habits</h4>
                      <p className="text-slate-500 text-xs">James Clear</p>
                      <div className="flex gap-1 mt-1">
                        {[1,2,3,4,5].map(i => (
                          <span key={i} className="text-yellow-400 text-xs">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=60&h=90&fit=crop"
                      alt="Book cover"
                      className="w-12 h-18 object-cover rounded shadow-sm"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-700 text-sm">The Psychology of Money</h4>
                      <p className="text-slate-500 text-xs">Morgan Housel</p>
                      <div className="flex gap-1 mt-1">
                        {[1,2,3,4].map(i => (
                          <span key={i} className="text-yellow-400 text-xs">★</span>
                        ))}
                        <span className="text-slate-300 text-xs">★</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Favorite Albums Module */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Favorite Albums This Month</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=80&h=80&fit=crop"
                      alt="Album cover"
                      className="w-16 h-16 object-cover rounded-lg shadow-sm mx-auto mb-2"
                    />
                    <h4 className="font-medium text-slate-700 text-xs">Folklore</h4>
                    <p className="text-slate-500 text-xs">Taylor Swift</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=80&h=80&fit=crop"
                      alt="Album cover"
                      className="w-16 h-16 object-cover rounded-lg shadow-sm mx-auto mb-2"
                    />
                    <h4 className="font-medium text-slate-700 text-xs">Kind of Blue</h4>
                    <p className="text-slate-500 text-xs">Miles Davis</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Marathon Progress Module */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Road to My Next Marathon</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">Training Progress</span>
                      <span className="text-slate-700 font-medium">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600 text-sm">This Week's Miles:</span>
                      <span className="text-slate-800 font-medium">32 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 text-sm">Longest Run:</span>
                      <span className="text-slate-800 font-medium">15 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 text-sm">Next Race:</span>
                      <span className="text-slate-800 font-medium">45 Days</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                    City Marathon
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Coffee Setup Affiliate Module */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">My Go-To Coffee Setup</h3>
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=120&h=120&fit=crop"
                    alt="Coffee equipment"
                    className="w-20 h-20 object-cover rounded-lg shadow-sm mx-auto mb-3"
                  />
                  <h4 className="font-medium text-slate-700 mb-2">Hario V60 Pour Over Kit</h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    My daily driver for the perfect cup. Consistently brews clean and flavorful coffee.
                  </p>
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white mb-2">
                    Check it Out
                  </Button>
                  <p className="text-xs text-slate-400">(Affiliate Link)</p>
                </div>
              </CardContent>
            </Card>

            {/* Recipe Module */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Latest Recipe I'm Loving</h3>
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=150&h=100&fit=crop"
                    alt="Spicy Tomato Pasta"
                    className="w-full h-24 object-cover rounded-lg shadow-sm mb-3"
                  />
                  <h4 className="font-medium text-slate-700 mb-2">Spicy Tomato Pasta</h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    A quick and flavorful pasta dish perfect for weeknights. Packed with rich tomato flavor and a hint of spice.
                  </p>
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                    Get The Recipe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Thoughts Module */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm md:col-span-2 lg:col-span-3">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Current Thoughts & Musings</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Lately, I've been reflecting on the importance of mindful consumption and how it applies to everything from the books we read to the content we consume online. It's fascinating how small changes in our daily habits can lead to significant shifts in perspective and overall well-being. The journey of intentional living continues to surprise me with its depth and simplicity.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                  Read More... →
                </a>
              </CardContent>
            </Card>

          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-sm">
              Powered by <span className="font-semibold text-slate-700">Evolve</span> – Your dynamic online presence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
