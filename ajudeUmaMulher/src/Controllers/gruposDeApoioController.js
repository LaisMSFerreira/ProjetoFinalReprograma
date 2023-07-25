const { response, request } = require("express")
const gruposDeApoioJson = require("../Models/gruposDeApoio.json")

const getAllGroups = (request, response) => {
    try {
        response.status(200).json([{
            grupos : gruposDeApoioJson
        }])
    } catch (err) {
        response.status(500).send([{
            message : "Server error!"
        }])
    }
}

const getGroupByName = (request, response) => {
    const nameRequest = request.query.name;
    const nameFilter = gruposDeApoioJson.filter((grupos) => grupos.name == nameRequest)
    if (nameFilter.length > 0) {
        response.status(200).send(nameFilter)
    } else {
        response.status(404).send([{
            message : "Name Not Found!"
        }])
    }
}

const getGroupsByLocalization = (request, response) => {
    const localizationRequest = request.query.localization;
    const localizationFilter = gruposDeApoioJson.filter((grupos) => grupos.localization == localizationRequest)
    if(localizationFilter.length > 0) {
        response.status(200).send(localizationFilter)
    } else {
        response.status(404).send([{
            message : "Localization not found!"
        }])
    }
}

const addNewGroup = (request, response) => {
    try {
        let nameRequest
        let localizationRequest
        let addresRequest
        let phoneNumberRequest
        let attendanceRequest
        let servicesRequest
        let whatsappGroupRequest

        let newGroup = {
        id: Math.floor(Date.now() * Math.random()).toString(36), 
        name: nameRequest,
        localization: localizationRequest,
        addres: addresRequest,
        phoneNumber: phoneNumberRequest,
        attendance: attendanceRequest,
        services: servicesRequest,
        whatsappGroup: whatsappGroupRequest,
        };
gruposDeApoioJson.push(newGroup)
response.status(201).json([{
    message: "New group successfully registered!",
}])
    } catch (error) {
        console.log(error)
        response.status(500).send([{
            message: "Error to register new group!"
        }])
    }
}

const updateServicesById = (request, response) => {
    const idRequest = request.params.id
    let servicesRequest = request.body
    let findServices = gruposDeApoioJson.findIndex((grupos) => grupos.id == idRequest)

    if (gruposDeApoioJson.splice(findServices, 1, servicesRequest)) {
        response.status(200).json([{
            message: "Services updated sucessfully!",
            gruposDeApoioJson
        }])
        
    } else {
        response.status(404).json([{
            message: "Could not update services!"
        }])
    }
}

const updateAttendenceById = (request, response,) => {
    const idRequest = request.params.id
    const attendenceRequest = request.body.attendence
    attendenceFind = gruposDeApoioJson.find((grupos) => grupos.id == idRequest)

    if (attendenceFind) {
        attendenceFind.attendence = attendenceRequest,
        response.status(200).json([{
            message: "Attendence updated sucessfully",
            gruposDeApoioJson
        }])
    } else {
        response.status(404).json([{
            message: "Could not update attendence"
        }])
    }
}




    const deleteGroupsById = (request, response) => {
        const idRequest = request.params.id
        const findGroup = gruposDeApoioJson.findIndex((grupos) => grupos.id == idRequest)

        gruposDeApoioJson.splice(findGroup, 1)

        if (findGroup) {
            response.status(200).json([{
                "message": "Selected group was deleted",
                "deleted":idRequest,
                gruposDeApoioJson
            }])
        } else {
            response.status(404).send([{
            message: "Undeleted group"
            }])
    }
}

    const deleteGroupByName = (request, response) => {
        const idRequest = request.params.name
        const deleteGroup = gruposDeApoioJson.findIndex(group => group.name == idRequest)
        gruposDeApoioJson.splice(deleteGroup, 1)

        response.status(200).json([{
            "message": "Group deleted",
            "Deleted" : idRequest,
            gruposDeApoioJson
        }])
    }





module.exports = {
    getAllGroups,
    getGroupByName,
    getGroupsByLocalization,
    addNewGroup,
    updateServicesById,
    updateAttendenceById,
    deleteGroupsById,
    deleteGroupByName
}
