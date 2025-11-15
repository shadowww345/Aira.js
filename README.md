# Aira.js
🇹🇷 Türkçe Açıklama
Aira.js Nedir?

Aira.js, yapay zekâ (AI) ve sinir ağlarının temel çalışma mantığını öğrenmek, denemek ve geliştirmek için oluşturulmuş küçük ve deneysel bir JavaScript kütüphanesidir.
Bu proje üretim amaçlı değildir; tamamen eğitim ve deneme odaklıdır.

Özellikler

Basit Nöron (Neuron) sınıfı

Ağırlık, bias ve sigmoid aktivasyon fonksiyonu

Basit eğitim (perceptron tarzı)

Gizli katman + çıktı nöronundan oluşan küçük bir sinir ağı

Tokenizer ile kelime ayrıştırma

Kelime vektörleştirme ve normalizasyon

Hiçbir bağımlılık yok — tamamen sade

Geliştirmeye açık yapı

Kurulum

Aira.js npm’de değildir. Bu yüzden:

1 — Depoyu klonlayın
git clone https://github.com/shadowww345/Aira.js

2 — Dosyayı direkt projeye ekleyin
<script src="Aira.js"></script>


Node ortamında:

require("./Aira.js");

Kod Yapısı
Neuron

Her nöron:

Rastgele ağırlıklar

Bias

Sigmoid aktivasyon

Eğitim fonksiyonu içerir

Kullanım:

const neuron = new Neuron();
const output = neuron.process([0.2, 0.4, 0.6]);

NeuralNetwork

Gizli katman + tek bir çıktı nöronu içerir.

const network = new NeuralNetwork(3, 10, 1);
const prediction = network.predict([0.1, 0.2, 0.3]);

Tokenizer

Metni küçük harfe çevirir ve kelimelere böler:

Tokenizer("Hey Aira bugün napıyorsun");
// -> ["hey", "aira", "bugün", "napıyorsun"]

Vectorize + Normalize

Önceden tanımlanmış bir kelime sözlüğü ile vektör oluşturur:

vectorize(["hey", "napıyorsun"]);
// -> [0, 2, 0]


Normalize eder:

normalizeVector([0, 2, 0]);
// -> [0, 1, 0]

Örnek Kullanım
const testword = normalizeVector(
    vectorize(Tokenizer("Hey Aira bugün napıyorsun"))
);

const neuron = new Neuron();
const score = neuron.process(testword);

console.log(neuron.process(score));
console.log(testword);

Gelecek Planlar

Softmax ve cross-entropy

Daha gelişmiş sinir ağı yapıları

Model kaydetme/yükleme

Veri seti eğitimi

Daha gelişmiş tokenizer

Lisans

MIT Lisansı ile sunulmaktadır.

🇬🇧 English Description
What is Aira.js?

Aira.js is a small experimental JavaScript library created to help beginners understand how artificial intelligence and neural networks work.
It is not intended for production use—its purpose is learning, experimentation, and exploration.

Features

Simple Neuron class

Random weights, bias, and sigmoid activation

Basic perceptron-style training

Small Neural Network (hidden layer + output neuron)

Tokenizer for text processing

Word vectorization and normalization

Zero dependencies — fully lightweight

Very easy to modify and extend

Installation

Aira.js is not available on npm.

1 — Clone the repository
git clone https://github.com/shadowww345/Aira.js

2 — Include the file

Browser:

<script src="Aira.js"></script>


Node:

require("./Aira.js");

Code Structure
Neuron

Each neuron contains:

Random weights

Bias

Sigmoid activation

Train function

Usage:

const neuron = new Neuron();
const output = neuron.process([0.2, 0.4, 0.6]);

NeuralNetwork

A simple network with one hidden layer and one output neuron.

const network = new NeuralNetwork(3, 10, 1);
const prediction = network.predict([0.1, 0.2, 0.3]);

Tokenizer

Lowercases the text and extracts words:

Tokenizer("Hey Aira bugün napıyorsun");
// -> ["hey", "aira", "bugün", "napıyorsun"]

Vectorize + Normalize

Transforms tokens into a small numeric vector:

vectorize(["hey", "napıyorsun"]);
// -> [0, 2, 0]


Normalizes the vector:

normalizeVector([0, 2, 0]);
// -> [0, 1, 0]

Example Usage
const testword = normalizeVector(
    vectorize(Tokenizer("Hey Aira bugün napıyorsun"))
);

const neuron = new Neuron();
const score = neuron.process(testword);

console.log(neuron.process(score));
console.log(testword);

Future Plans

Improve neural network structure

Add softmax + cross-entropy

Add model saving/loading

Add dataset training

Expand NLP utilities

License

Released under the MIT License.
