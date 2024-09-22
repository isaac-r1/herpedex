from flask import Flask
from flask import render_template, redirect, url_for

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/login')
def login(name=None):
    return redirect('https://5623171022.propelauthtest.com/en/login')

@app.route('/register')
def register(name=None):
    return redirect('https://5623171022.propelauthtest.com/en/signup')

@app.route('/dashboard')
def dashboard(name=None):
    return render_template('dashboard.html')

@app.route('/herpedex')
def herpedex(name=None):
    return render_template('herpedex.html')


@app.route('/')
def index(name=None):
    return render_template('index.html')

if __name__ == '__main__':  # pragma: no cover
    app.run(port=80)