const gruposDeApoioModel = require("../Models/gruposDeApoioModel")

const getAllGroups = async (request, response) => {
    try {
        const allGroups = await gruposDeApoioModel.find({}, null);
        response.status(200).json(allGroups);
    } catch {
        response.status(500).json({ message: error.message });
    };
};

const getGroupByName = async (request, response) => {
    try {
        const findGroup = await gruposDeApoioModel.findOne({
            name: request.query.name
        });
        response.status(200).json(findGroup);
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: error.message })
    }
};

const getGroupsByLocalization = async (request, response) => {
    try {
        const findLocalization = await gruposDeApoioModel.findOne({
            localization: request.query.localization
        });
        response.status(200).json(findLocalization);
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const addNewGroup = async (request, response) => {
    try {
        const {
            name,
            localization,
            addres,
            phoneNumber,
            attendence,
            services,
            whatsappGroup
        } = request.body;

        const newGroup = new gruposDeApoioModel({
            name,
            localization,
            addres,
            phoneNumber,
            attendence,
            services,
            whatsappGroup,
        });
        const saveGroup = await newGroup.save();
        response.status(200).json({message: "New group successfully registered!", saveGroup})
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: error.message });
    };
};

const updateServicesById = async (request, response) => {
    try {
        const {
            name,
            localization,
            addres,
            phoneNumber,
            attendence,
            services,
            whatsappGroup
        } = request.body;
        const updateServices = await gruposDeApoioModel.findByIdAndUpdate(
            request.params.id,
            {
                name,
                localization,
                addres,
                phoneNumber,
                attendence,
                services,
                whatsappGroup,
            }
        );
        response.status(200).json(updateServices)
    } catch {
        console.error(error);
        response.status(500).json({ message: error.message })
    }
};

const updateAttendenceById = async (request, response,) => {
    try {
        const {
            name,
            localization,
            addres,
            phoneNumber,
            attendence,
            services,
            whatsappGroup
        } = request.body;
        const updateServices = await gruposDeApoioModel.findByIdAndUpdate(
            request.params.id,
            {
                name,
                localization,
                addres,
                phoneNumber,
                attendence,
                services,
                whatsappGroup,
            }
        );
        response.status(200).json({message: "Attendence updated.", updateServices})
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Unable to update!" })
    }
};


const deleteGroup = async (request, response) => {
    try {
        const {id} = request.params
        const deleteGroup = await gruposDeApoioModel.findByIdAndDelete(id)
        const message = `Group: ${deleteGroup.name} sucessfully deleted.`
        response.status(200).json({message})
    } catch (error) {
        console.error(error)
        response.status(500).json({message: "Undeleted group"
        });
    }
};


module.exports = {
    getAllGroups,
    getGroupByName,
    getGroupsByLocalization,
    addNewGroup,
    updateServicesById,
    updateAttendenceById,
    deleteGroup
}
