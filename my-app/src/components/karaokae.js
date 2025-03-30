import { useState } from "react";

export default function KaraokeApp() {
  const [selectedOption, setSelectedOption] = useState("");
  const [hours, setHours] = useState("");
  const [total, setTotal] = useState("");

  const calculate = () => {
    let rate ;
    if (!hours) {
      alert("กรุณากรอกจำนวนชั่วโมง");
      return;
    }
    if(selectedOption === 'normal'){
    rate = 120 ;
    }else rate = 80 ;
    setTotal(`${hours*rate}`);
  };

  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <table border="2 solid black" >
          <tr>
            <td>
              <strong>ร้านคาราโอเกะ</strong>
              </td>   
          </tr> 
          <tr>   
            <td>       
                <label>
                  <input type="radio" name="student"value="normal"onChange={() => { setSelectedOption("normal");}}/>
                  ไม่มีบัตรนักศึกษา
                </label>
                <br />
                ชั่วโมงละ 120 บาท จำนวน
                <input type="number" min="1"onChange={(e) => setHours(e.target.value)}/>
                ชั่วโมง
                <br />
                <label>
                  <input type="radio"name="student"value="student"onChange={() => {setSelectedOption("student");}}/>
                  มีบัตรนักศึกษา
                </label>
                <br />
                ชั่วโมงละ 80 บาท จำนวน
                <input type="number"min="1" onChange={(e) => setHours(e.target.value)}
                />
                ชั่วโมง           
            </td>
          </tr>      
      </table>
      <br />
      <div >
        <button onClick={calculate}>คิดเงิน</button>
      </div>
      <div >
        รวมเป็นเงินทั้งสิ้น =
        <input type="text" value={total}/> บาท
      </div>
    </div>
  );
}