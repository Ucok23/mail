import {Account, Mail} from "../models/Mail";

const ucok: Account = {name: "Ucok", username: "ucok23@gmail.comm"}
const hanipah: Account = {name: "Hanipah", username: "hanipah23@gmail.comm"}
const umar: Account = {name: "Umar", username: "umar23@gmail.comm"}
const person: Account = {name: "person", username: "username@gmail.comm"}

const mails: Mail[] = [
    {from: ucok, to: hanipah, date: "01/09/2022", subject: "Hi there"},
    {from: ucok, to: umar, date: "01/09/2022", subject: "Hi there"},
    {from: person, to: umar, date: "01/09/2022", subject: "Hi there"},
]

export { mails }