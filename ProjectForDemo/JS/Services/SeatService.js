class SeatService {
    static url = "http://localhost:3000/row-1";
    static async getSeatStructure(row) {
        return await axios.get(`http://localhost:3000/${row}`);
    }
    static async updateSeatRow(row, id, book) {
        console.log("service");
        return await axios.patch(`http://localhost:3000/${row}/${id}`, { Status: book });

    }

    static async changeSeatStatus(row, id, updateObj) {
        return await axios.patch(`http://localhost:3000/${row}/${id}`, updateObj);

    }
}
export default SeatService;