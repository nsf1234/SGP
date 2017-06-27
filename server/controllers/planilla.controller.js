import Planilla from '../models/planilla.model'

function load(params) {
	return Planilla.get(params.id);
}

function get(req, res) {
  return res.json(req.post);
}

function create(params) {
  const post = new Post({
    fecha_inicio: params.data.fecha_inicio,
    fecha_fin: params.data.fecha_fin,
    turnos: params.data.turnos
  });
  return post.save();
}
