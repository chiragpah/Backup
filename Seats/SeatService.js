class SeatServices {

    static async getSeats(time) {
        const res = await axios.get(`http://localhost:4000/${time}`);
        return res?.data;
    }

    static async getSeatStructure(time, row) {
        const res = await axios.get(`http://localhost:4000/${time}`);
        console.log(res.data[row]);
        return res?.data[row];
    }

    static async getSeatsByTime(time) {
        const res = await axios.get(`http://localhost:4000/${time}`);
        return res?.data;
    }

    static async changeSeatStatus(time,row,id,updateObj) {
        const res = await axios.patch(`http://localhost:4000/${time}/${row}/${id}`, updateObj);
        console.log("seat updated");
        return res?.data;
    }
}

export default SeatServices;
