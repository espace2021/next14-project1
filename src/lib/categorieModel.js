import mongoose from 'mongoose'

export class Categorie  {
  _id;
  nomcategorie;
  imagecategorie;
}

const categorieSchema = new mongoose.Schema(
  {
    nomcategorie:{ type: String, required: true,unique:true },
    imagecategorie :{ type: String, required: false }
  },
  {
    timestamps: true,
  }
)

const categorieModel =
  mongoose.models.Categorie || mongoose.model('Categorie', categorieSchema)
export default categorieModel