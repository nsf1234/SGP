import Turno from '../models/turno.model'

function load(params) {
	return Turno.get(params.id);
}

function get(req, res) {
  return res.json(req.post);
}

function create(params) {
  const post = new Post({
    tipo: params.data.tipo,
    horas: params.data.horas
  });
  return post.save();
}
