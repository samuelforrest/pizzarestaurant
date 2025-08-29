import { motion } from "framer-motion";
import React from "react";

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Pizza, Heart, Star, ArrowRight, ChefHat, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const pizzaImages = [
  '/images/pizza-margherita.jpg',
  '/images/pizza-pepperoni.jpg',
  '/images/pizza-veggie.jpg',
  '/images/pizza-hawaiian.jpg',
  '/images/pizza-bbq.jpg',
  '/images/pizza-mushroom.jpg',
];

const LandingPage: React.FC = () => {
  return (
    <main className="font-sans">
      <section className="w-full bg-gradient-to-tr from-yellow-100 via-orange-50 to-red-100 py-16 px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <Pizza className="w-16 h-16 text-orange-500 drop-shadow-lg" />
          <h1 className="text-4xl md:text-5xl font-bold text-orange-800 text-center">
            Welcome to Mama Rosa&apos;s Pizzeria
          </h1>
          <p className="mt-2 text-lg md:text-xl text-orange-900 max-w-2xl text-center">
            Hand-tossed, wood-fired, and made with love since 1985. Taste the tradition in every slice!
          </p>
          <Button className="mt-6 px-8 py-3 text-lg bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg flex gap-2 items-center">
            Order Now <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </section>
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center text-rose-900 mb-2">
          Our Signature Pizzas
        </h2>
        <p className="text-center text-rose-700 mb-10">
          Explore our bestsellers, each crafted with fresh, locally-sourced ingredients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pizzaImages.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="shadow-md rounded-xl overflow-hidden">
                <img
                  src={src}
                  alt={`Delicious pizza number ${idx + 1}`}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>
                    {[
                      'Margherita',
                      'Pepperoni Feast',
                      'Veggie Supreme',
                      'Hawaiian Bliss',
                      'BBQ Chicken',
                      'Mushroom Magic',
                    ][idx]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    {[
                      'Classic Italian tomato, mozzarella, and fresh basil.',
                      'Loaded with spicy pepperoni and gooey cheese.',
                      'Crisp peppers, onions, olives, and mushrooms.',
                      'Sweet pineapple with savory ham and mozzarella.',
                      'Grilled chicken, BBQ sauce, red onions, and cilantro.',
                      'Rich mushrooms, creamy cheese, and a hint of garlic.',
                    ][idx]}
                  </p>
                  <div className="flex items-center gap-1 mt-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-gradient-to-br from-orange-50 to-rose-100 py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-orange-900 mb-6">
          Mama Rosa&apos;s Story
        </h2>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl w-full"
        >
          <Card className="shadow-lg bg-white/95 rounded-2xl border-0 p-0 overflow-hidden relative">
            <CardHeader className="flex flex-row items-center gap-4 bg-orange-100 py-6">
              <ChefHat className="w-10 h-10 text-orange-600" />
              <CardTitle className="text-xl text-orange-800">
                From Napoli to Your Table
              </CardTitle>
            </CardHeader>
            <CardContent className="py-6 px-8">
              <div className="flex flex-row gap-4">
                <Quote className="w-8 h-8 text-orange-300 mt-1 shrink-0" />
                <p className="text-gray-800 text-lg">
                  &quot;In 1978, I arrived in New York with little more than my mama&apos;s dough recipe and a dream. Every day, I poured my heart into kneading, tossing, and baking. Word spread, and soon our tiny kitchen was filled with laughter and the smell of fresh pizza. Today, Mama Rosa&apos;s is still family-owned, and every pizza we serve carries a piece of my story.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <img
                  src="/images/mama-rosa.jpg"
                  alt="Mama Rosa&apos;s portrait"
                  className="w-12 h-12 rounded-full border-2 border-orange-400"
                />
                <span className="font-bold text-orange-800">Rosa Bellini</span>
                <Heart className="w-5 h-5 text-red-400 ml-1" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center text-rose-900 mb-6">
          See Why Our Guests Love Us
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          <Card className="w-full md:w-1/2 shadow-md">
            <CardHeader className="flex flex-row items-center gap-3">
              <img
                src="/images/customer1.jpg"
                alt="Smiling guest enjoying pizza"
                className="w-10 h-10 rounded-full"
              />
              <CardTitle className="text-base text-rose-800">
                Jamie L.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                &quot;Best pizza I&apos;ve ever had! The crust is chewy, the sauce is tangy, and you can taste the love in every bite. Mama Rosa&apos;s is a must-visit.&quot;
              </p>
              <div className="flex items-center gap-1 mt-3">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
              </div>
            </CardContent>
          </Card>
          <Card className="w-full md:w-1/2 shadow-md">
            <CardHeader className="flex flex-row items-center gap-3">
              <img
                src="/images/customer2.jpg"
                alt="Guest with pizza slice"
                className="w-10 h-10 rounded-full"
              />
              <CardTitle className="text-base text-rose-800">
                Michael O.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                &quot;I grew up in Naples, and Mama Rosa&apos;s pizza takes me home. Friendly staff and a warm, family vibe. Highly recommend!&quot;
              </p>
              <div className="flex items-center gap-1 mt-3">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
                <Star className="w-4 h-4 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="bg-orange-100 py-12 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">
          Hungry? Let&apos;s Make Tonight Delicious!
        </h2>
        <Button className="px-8 py-3 text-lg bg-orange-600 hover:bg-orange-700 text-white rounded-full flex gap-2 items-center shadow-md">
          Order Now <ArrowRight className="w-5 h-5" />
        </Button>
      </section>
    </main>
  );
};

export default LandingPage;