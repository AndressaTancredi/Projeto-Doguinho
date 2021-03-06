const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new Schema({ 
  nome: { type: String },
  raca: { type: String },
  idade: { type: Number },
  tamanho: { type: String },
  sexo: { type: String },
  descricao: { type: String }
});

const ClienteSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  cep: { type: Number, required: true },
  estado: { type: String },
  cidade: { type: String },
  bairro: { type: String },
  rua: { type: String },
  numero: { type: Number },
  complemento: { type: String },
  pet: [PetSchema]
});

const PasseadorSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  cep: { type: Number, required: true },
  estado: { type: String },
  cidade: { type: String },
  bairro: { type: String },
  rua: { type: String },
  numero: { type: Number },
  complemento: { type: String },
  descricao: { type: String }
})

const ClienteModel = mongoose.model("clientes", ClienteSchema);
const PetModel = mongoose.model("pets", PetSchema);
const PasseadorModel = mongoose.model("passeadores", PasseadorSchema);

module.exports = {ClienteModel, PetModel, PasseadorModel }