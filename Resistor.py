from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)



@app.route("/", methods=['GET'])
def home():
    colours = ['silver', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray', 'white', 'gold', 'black']
    return render_template("index.html", colours = colours)

if __name__ == "__main__":
    app.run()
