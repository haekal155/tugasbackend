import { query } from "../Database/db.js";

export const getNotes = async (req, res) => {
    try {
        const result= await query(`select * from notes`);
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// export const addNotes = async (req, res) => {
//     const { name, author } = req.body;
//     try {
//         await query("INSERT INTO notes (name, author) VALUES (?, ?)", {
//             name,
//             author,
//         });
//         return res.status(200).json({ msg: ""});
//     }
// };

export const updateNotes = async (req, res) => {
    const { name } = req.body;
    try {
        await query("UPDATE notes SET title = ? WHERE id = ?", {
            title,
            id
        });
        return res.status(200).json({ msg: "Note diupdate"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deleteNotes = async (req, res) => {
    const { id } = req.params;
    try {
        await query("DELETE FROM notes WHERE id = ?", [id]);
        return res.status(200).json({ msg: "Note dihapus" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server "});
    }
};