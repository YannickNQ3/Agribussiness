import UserModel from '../models/BlogModel.js';

//** Metodos para el CRUD **/

//** Mostrar todos los registros**/
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await UserModel.findAll()
    res.json(blogs)
  } catch (error) {
    res.json({ message: error.message })
  }
}

//** Mostrar un Registro**/
export const getBlog = async (req, res) => {
  try {
    const blog = UserModel.findAll({
      where: { id: req.params.id }
    })
    res.json(blog)
  } catch (error) {
    res.json({ message: error.message })
  }
}
//** Crear un Registro **/
export const createBlog = async (req, res) => {
  try {
    await UserModel.create(req.body)
    res.json ({
      "message":"¡Registro creado correctamente!"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}
//** Actualizar un Registro**/

export const updateBlog = async (req, res) => {
  try {
    await UserModel.update(req.body, {
      where: {id: req.params.id}
    })
    res.json ({
      "message":"¡Registro actualizado correctamente!"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

//** Eliminar un Registro**/

export const deleteBlog = async (req, res) => {
  try {
    await UserModel.destroy({
      where: {id: req.params.id}
    })
    res.json ({
      "message":"¡Registro eliminado correctamente!"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}