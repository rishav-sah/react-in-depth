const About = () => {
  return (
    <div className="p-4 container mx-auto text-gray-800">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl text-center font-semibold">About Us</h1>
        <p>
          Welcome to FoodDeliver, your go-to destination for delicious food delivered right to your doorstep. We're passionate about making mealtime convenient and enjoyable for you.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="mb-2 text-3xl text-center font-semibold">Our Mission</h2>
        <p>Our mission is simple - to connect you with the best local restaurants and deliver mouthwatering meals to your home or office. We believe that everyone deserves access to great food without the hassle of cooking or dining out.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Why Choose FoodDeliver?</h2>
        <ul class="list-disc ml-6 text-gray-700">
          <li className="my-2 leading-8"><strong>Wide Variety:</strong> We partner with a diverse range of restaurants, offering cuisines from around the world. Whether you're craving pizza, sushi, or a hearty burger, we've got you covered.</li>
          <li className="my-2 leading-8"><strong>Convenience:</strong> Ordering with FoodDeliver is quick and easy. Just a few clicks, and your meal is on its way.</li>
          <li className="my-2 leading-8"><strong>Fast Delivery:</strong> We're committed to delivering your food hot and fresh. Our drivers work tirelessly to ensure your meal arrives promptly.</li>
          <li className="my-2 leading-8"><strong>Quality Assurance:</strong> We maintain strict quality standards to ensure that every meal you receive is of the highest quality.</li>
        </ul>
      </div>

      <div>
        <p>Thank you for choosing FoodDeliver. We look forward to serving you delicious meals, one delivery at a time!</p>
      </div>
    </div>
  );
};

export default About;
