class SeatServices {
    static async getSeats() {
        const res = await axios.get("http://localhost:3000/seat_arrangements");
        return res?.data;
    }

    static async getSeatsRow(row) {
        const res = await axios.get(`http://localhost:3000/${row}`);
        return res?.data;
    }

    static async changeSeatStatus(row, id, updateObj) {
        const res = await axios.patch(`http://localhost:3000/${row}/${id}`, updateObj);
        console.log("seat updated");
        return res?.data;
    }
}

export default SeatServices;

