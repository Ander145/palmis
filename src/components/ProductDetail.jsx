import React from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const ProductDetail = ({ product }) => {
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Aucun produit trouvé.
      </div>
    );
  }
  return (
    <div className="flex flex-col lg:flex-row gap-10 p-10 bg-pink-50 min-h-screen items-center">
      <div className="flex-1 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-2xl w-full max-w-md h-auto object-cover shadow-md"
        />
      </div>
      <Card className="flex-1 border-0 shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-pink-600">
            {product.name}
          </CardTitle>
          <p className="text-gray-600 text-sm mt-2">{product.category}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
          <Badge className="bg-pink-100 text-pink-700 text-lg font-semibold w-20">
            ${product.price}
          </Badge>
          <Separator />

          <div className="flex items-center gap-3">
            <div className="flex items-center text-yellow-400">
              <Star className="w-5 h-5 fill-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400" />
              <Star className="w-5 h-5" />
            </div>
          </div>

          <Button
            onClick={() => navigate("/shop")}
            className="bg-pink-600 hover:bg-pink-700 text-white w-full mt-5"
          >
            Ajouter au panier
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
