import Professors from "../models/Faculty.js";

const testing = async (req, res) => {
	try{
		const prof = await Professors.findOne({_id: req.params.id})
		console.log(prof)
		res.render('text.ejs', {profData: prof})
	}catch(err){
		res.status(404).json({'success': false })
	}
}
export default testing;