
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Award, Shield } from "lucide-react";

export const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-two-trees-green mb-4">
            Why Busy Families Choose Two Trees Cleaning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand your time is valuable. That's why we've built our service around reliability, quality, and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-two-trees-green" />
              </div>
              <h3 className="text-2xl font-bold text-two-trees-green mb-4">Reliable</h3>
              <p className="text-gray-600 leading-relaxed">
                We show up on time, every time. Your cleaning is scheduled around your busy life, not the other way around.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-two-trees-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-two-trees-gold" />
              </div>
              <h3 className="text-2xl font-bold text-two-trees-green mb-4">High Standards</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't cut corners. Every surface, every room gets the thorough cleaning your family deserves.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-two-trees-green" />
              </div>
              <h3 className="text-2xl font-bold text-two-trees-green mb-4">Attention to Detail</h3>
              <p className="text-gray-600 leading-relaxed">
                From baseboards to ceiling fans, we notice what others miss. Your home gets the detailed care it deserves.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
