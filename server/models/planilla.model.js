import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
/*
 * Schema
 */
const PlanillaSchema = new mongoose.Schema({
  fecha_inicio: {
    type: date,
    required: true
  },
  fecha_fin: {
    type: date,
    required: true
  },
  turnos: {
  	type: array, //array will contain object{turno_id: objectId, fecha_inicio: date}
    required: true
  }
});

/*
 * Methods
 */
PlanillaSchema.method({
});

/*
 * Static Methods
 */
PostSchema.statics = {
  /*
   * Get planilla
   * @param {ObjectId} id - The objectId of planilla.
   * @returns {Promise<Post, APIError>}
   */
    get(id) {
      return this.findById(id)
      .exec()
      .then((plan) => {
        if (plan) {
          return plan;
        }
        const err = new APIError('No existe planilla', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List planillas in descending order of 'fecha_inicio' timestamp.
   * @param {number} skip - Number of posts to be skipped.
   * @param {number} limit - Limit number of posts to be returned.
   * @returns {Promise<Post[]>}
   */
  list({ skip = 0, limit = 50 } = {}) { //Not sure if we'll ever need to get ALL of them but eh, better safe than sorry
    return this.find()
      .sort({ fecha_inicio: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/*
 * @typedef Planilla
 */
 export default mongoose.model('Planilla',PlanillaSchema);