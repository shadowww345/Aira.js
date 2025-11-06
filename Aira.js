/**
 * Made by shadow
 * Aira.js
 * Aira is a small artificial intelligence library that is currently under development.
 */




//Neuron//
class Neuron {
    constructor() {
    this.weights = Array.from({length: 3}, () => Math.random())
    this.bias = Math.random()
  }

  process(inputs) {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * this.weights[i]
    }
    return 1 / (1 + Math.exp(-(sum + this.bias))) 
  }
    train(inputs, target, learningRate = 0.1) {
    const output = this.process(inputs)
    const error = target - output
    
      
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += learningRate * error * inputs[i]
    }
    this.bias += learningRate * error
  }
}

let layer = []
for (let i = 0; i < 100; i++) {
  layer.push(new Neuron())
    
}
//Network//
class NeuralNetwork {

    constructor(inputSize,hiddenSize,outputSize) {
      this.hiddenLayer = Array.from({length: hiddenSize}, () => new Neuron(inputSize))
      this.outputLayer = new Neuron(hiddenSize)
    }
    
    predict(inputs) {
      const hiddenOutputs=this.hiddenLayer.map(Neuron => Neuron.process(inputs))
      return this.outputLayer.process(hiddenOutputs)
    }
}

class Activation {
    static relu(x) {return Math.max(0,x)}
    static tanh(x) {return Math.tanh(x)}
    static softmax(values) {}
}

function errorMeasurement(predicted,actual) {

   return predicted.reduce((sum, p, i) => sum + Math.pow(p - actual[i], 2), 0) / predicted.length


}
    //Tokenizg
    function Tokenizer(input) {

    input = input.toLowerCase();


    const wordRegex = /[a-zığüşöç0-9]+/gi;

    const tokens = input.match(wordRegex)

    return tokens || []
}
const network = new NeuralNetwork
const neuron = new Neuron
const activate = new Activation


const vocab = {selam:2,merhaba:2,nasılsın:1,iyimisin:1,napıyorsun:1,hey:1}
//Vectorizing
function vectorize(tokens) {

      const vector = [0, 0, 0];
      for (let input of tokens) {
        if (vocab[input] !== undefined) vector[vocab[input]] += 1
      }
      return vector
}

function normalizeVector(vector) {
    const magnitude = Math.sqrt(vector.reduce((sum,val)=> sum + val * val ,0))
  return vector.map(val => val/magnitude)
}


//Using lib//
const testword =  normalizeVector(vectorize(Tokenizer("Hey Aira bugün napıyorsun")))
const score = neuron.process(testword)
console.log(neuron.process(score))
console.log(testword)
//Using lib//
