const conversionesService = {
  ConversionesService: {
    ConversionesPort: {
      CelsiusAFahrenheit(args) {
        const celsius = parseFloat(args.celsius);
        const fahrenheit = (celsius * 9) / 5 + 32;
        return { fahrenheit };
      },
      KilometrosAMillas(args) {
        const kilometros = parseFloat(args.kilometros);
        const millas = kilometros * 0.621371;
        return { millas };
      }
    }
  }
};

module.exports = conversionesService;