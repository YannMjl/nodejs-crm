import xlsx from 'xlsx';
import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addnewContact = (req, res) => {

    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });

}

export const getContacts = (req, res) => {

    Contact.find({}, (err, contact) => {

        if (err) {
            res.send(err);
        }
        res.json(contact);

    });

}

export const getJobs = (req, res) => {

    var workbook = XLSX.readFile('./files/players.xlsx');
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    if (err) {
        res.send(err);
    }
    console.log(xlData);
    res.send('Hi');
    // res.json(contact);

}
