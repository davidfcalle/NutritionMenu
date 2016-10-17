#!/usr/bin/env python

import sys
from flask import Flask, render_template,request, send_from_directory, Response
from os.path import join, dirname, abspath
from food import Food
import json

app = Flask(__name__, static_url_path='/static')
foods = []

@app.route('/api/foods')
def foods_api():
    foodjson = json.dumps(map(lambda x: x.__dict__, foods))
    resp = Response(response=foodjson,
    status=200, \
    mimetype="application/json")
    return resp

@app.route('/')
def main():
    return send_from_directory('templates', "index.html")


def load_csv(filename):
    with open(filename, "r") as lines:
        for line in lines:
            food = line.split(";")
            if food[0] == '':
                #se debe agregar una categoria
                pass
            else:
                comida = Food(codigo = food[0], nombre = food[1], descripcion = food[2], comestible = convert(food[3]), calorias = convert(food[4]), agua = convert(food[5]), proteina = convert(food[6]), grasa = convert(food[7]), cho = convert(food[8]), fibra = convert(food[9]), ceniza = convert(food[10]), calcio = convert(food[11]), fosforo = convert(food[12]), hierro = convert(food[13]), vitamina_a_ui = convert(food[14]), vitamina_a_er = convert(food[15]), tiamina = convert(food[16]) , riboflavina = convert(food[17]), niacina = convert(food[18]), vitamina_c = convert(food[19]))
                foods.append(comida)
        
    
def convert(number):
    number = number.split(",")
    if len(number) == 1:
        try:
            return float(number[0])
        except:
            return 0.0
    else:
        return float(number[0] + "." + number[1])

if __name__ == '__main__':
    reload (sys)
    sys.setdefaultencoding("utf-8")
    fname = join(dirname(dirname(abspath(__file__))), 'NutritionMenu', 'db.csv')
    load_csv(fname)
    print len(foods)
    #web server
    app.run(port=8080, host="0.0.0.0")
