import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Turno Schema
 */
const TurnoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true
  },
  horas: {
    type: int,
    required: true
  }
});

/*
 * Methods
 */
TurnoSchema.method({
});

/*
 * Static Methods
 */
TurnoSchema.statics = {
  /*
   * Get turno
   * @param {ObjectId} id - The objectId of planilla.
   * @returns {Promise<Post, APIError>}
   */
    get(id) {
      return this.findById(id)
      .exec()
      .then((turno) => {
        if (turno) {
          return turno;
        }
        const err = new APIError('No existe turno!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List turnos in descending order of '_id timestamp.
   * @param {number} skip - Number of posts to be skipped.
   * @param {number} limit - Limit number of posts to be returned.
   * @returns {Promise<Post[]>}
   */
  list({ skip = 0, limit = 50 } = {}) { //Not sure if we'll ever need to get ALL of them but eh, better safe than sorry
    return this.find()
      .sort({ _id: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/*
 * @typedef Turno
 */
 export default mongoose.model('Turno',TurnoSchema);