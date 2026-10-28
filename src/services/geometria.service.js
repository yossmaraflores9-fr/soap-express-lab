const geometriaService = {
  GeometriaService: {
    GeometriaPort: {
      AreaRectangulo(args) {
        const base = parseFloat(args.base);
        const altura = parseFloat(args.altura);
        const area = base * altura;
        return { area };
      },
      PerimetroRectangulo(args) {
        const base = parseFloat(args.base);
        const altura = parseFloat(args.altura);
        const perimetro = 2 * (base + altura);
        return { perimetro };
      }
    }
  }
};

module.exports = geometriaService;