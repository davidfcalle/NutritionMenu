class Food(object):

    def __init__(self, codigo = None, nombre = None, descripcion = None, comestible = None, calorias = None, agua = None, proteina = None, grasa = None, cho = None, fibra = None, ceniza = None, calcio = None, fosforo = None, hierro = None, vitamina_a_ui = None, vitamina_a_er = None, tiamina = None, riboflavina = None, niacina = None, vitamina_c = None):
        self.codigo = codigo
        self.nombre = nombre.replace("\"", "")
        self.descripcion = descripcion.replace("\"", "")
        self.comestible = comestible
        self.calorias = calorias
        self.agua = agua
        self.proteina = proteina
        self.grasa = grasa
        self.cho = cho
        self.fibra = fibra
        self.ceniza = ceniza
        self.calcio = calcio
        self.fosforo = fosforo
        self.hierro = hierro
        self.vitamina_a_ui = vitamina_a_ui
        self.vitamina_a_er = vitamina_a_er
        self.tiamina = tiamina
        self.riboflavina = riboflavina
        self.niacina = niacina
        self.vitamina_c = vitamina_c
