import { useState } from "react";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import UpperCaseButton from "./Components/Upper_Case_Button";
import OutputSection from "./Components/Output_Section";
import CopyButton from "./Components/Copy_Button";
import LowerCaseButton from "./Components/Lower_Case_Button";
import AlertComponent from "./Components/Alert_Component";
import WordCountButton from "./Components/Word_Count_Button";
import ExtraSpaceRemove from "./Components/Extra_Space_Remover";
import About from "./Components/About";
import SpecialCharecterRemove from "./Components/Special_Charecter_Remover";
import { BrowserRouter, Routes, Route } from "react-router-dom";
let click,
  Change_Text,
  click_2,
  Copy,
  Dark_Mode,
  Word_Counter,
  Extra_Spaces_Remover,
  Special_Charecter_Remover;

const App = () => {
  let [Text, Update_Text] = useState("");
  let [Text_2, Update_Text_2] = useState("");
  let [Message, setMessage] = useState("");
  // let [Bool, setBool] = useState(true);
  let [Button_1, ColorButton_1] = useState("primary");
  let [Button_2, ColorButton_2] = useState("primary");
  let [Button_3, ColorButton_3] = useState("primary");
  let [Button_4, ColorButton_4] = useState("primary");
  let [Button_5, ColorButton_5] = useState({
    backgroundColor: "#0d6efd",
    color: "white",
  });
  let [Button_6, ColorButton_6] = useState({
    backgroundColor: "#0d6efd",
    color: "white",
  });
  // let [Button_7, ColorButton_7] = useState({backgroundColor:"#0d6efd",color:"white"});
  Special_Charecter_Remover = () => {
    let Regex_2 = /([!@#$%^*():;"'/\\_\-|])+/g;
    let Temporary_Text = Text;
    Temporary_Text = Temporary_Text.replace(Regex_2, "");
    Update_Text_2(Temporary_Text);
    setMessage("Special Charecters Removed");
    setTimeout(() => {
      document.querySelector(".alert").hidden = true;
    }, 2000);
    document.querySelector(".alert").hidden = false;
  };
  Word_Counter = () => {
    if (Text === "") {
      setMessage("Please Type Something");
      document.querySelector(".alert").hidden = false;
      setTimeout(() => {
        document.querySelector(".alert").hidden = true;
      }, 2000);
    } else {
      let Splitted_Text = Text.split(/\s+/g);
      let count = 0;
      for (let index = 0; index < Splitted_Text.length; index++) {
        const element = Splitted_Text[index];
        if (element !== "") {
          count++;
        }
      }
      if (count !== 0) {
        Update_Text_2(`So The Word Count Is ${count}`);
      }
    }
  };
  Extra_Spaces_Remover = () => {
    const Regex = /(\s)+/g;
    let Temporary_Text = Text;
    Temporary_Text = Temporary_Text.replace(Regex, " ");
    Update_Text_2(Temporary_Text);
    setMessage("Extra Spaces Removed");
    setTimeout(() => {
      document.querySelector(".alert").hidden = true;
    }, 2000);
    document.querySelector(".alert").hidden = false;
  };
  click = () => {
    if (Text === "") {
      setMessage("Please Type Something");
      setTimeout(() => {
        document.querySelector(".alert").hidden = true;
      }, 2000);
      document.querySelector(".alert").hidden = false;
    } else {
      Update_Text("");
      Update_Text_2(Text.toUpperCase());
      setMessage("Converted To UpperCase");
      setTimeout(() => {
        document.querySelector(".alert").hidden = true;
      }, 2000);
      document.querySelector(".alert").hidden = false;
    }
  };

  click_2 = () => {
    if (Text === "") {
      setMessage("Please Type Something");
      setTimeout(() => {
        document.querySelector(".alert").hidden = true;
      }, 2000);
      document.querySelector(".alert").hidden = false;
    } else {
      Update_Text("");
      Update_Text_2(Text.toLowerCase());
      setMessage("Converted To LowerCase");
      setTimeout(() => {
        document.querySelector(".alert").hidden = true;
      }, 2000);
      document.querySelector(".alert").hidden = false;
    }
  };

  Copy = () => {
    if (Text === "") {
      setMessage("Please Enter Something To Copy");
      document.querySelector(".alert").hidden = false;
      // console.log(Message);
      setTimeout(() => {
        document.querySelector(".alert").hidden = true;
      }, 3000);
    } else {
      navigator.clipboard.writeText(Text_2);
      setMessage("Copied To Clipboard");
      document.querySelector(".alert").hidden = false;
      // console.log(Message);
      setTimeout(() => {
        document.querySelector(".alert").hidden = true;
      }, 3000);
    }
  };

  Change_Text = (event) => {
    Update_Text(event.target.value);
    // console.log(event.target.value.includes(Regex));
    // if (event.target.value === "") {
    //   setBool(true);
    // } else {
    //   setBool(false);
    // }
  };

  const [Object, Editable_Object] = useState({
    text: "Enable Dark Mode",
  });

  Dark_Mode = () => {
    if (Object.color === "white") {
      Editable_Object({
        color: "black",
        backgroundColor: "white",
        text: "Enable Dark Mode",
      });
      ColorButton_1("primary");
      ColorButton_2("primary");
      ColorButton_3("primary");
      ColorButton_4("primary");
      ColorButton_5({ backgroundColor: "#0d6efd", color: "white" });
      ColorButton_6({ backgroundColor: "#0d6efd", color: "white" });
      // ColorButton_7({backgroundColor:"#0d6efd",color:"white"})
      document.body.style.background = "white";
      setMessage("Dark Mode Disabled");
      setTimeout(() => {
        document.querySelector(".alert").hidden = true;
      }, 2000);
      document.querySelector(".alert").hidden = false;
    } else {
      Editable_Object({
        color: "white",
        backgroundColor: "#333131",
        text: "Disable Dark Mode",
      });
      setMessage("Dark Mode Enabled");
      document.body.style.background = "#645454";
      ColorButton_1("success");
      ColorButton_2("secondary");
      ColorButton_3("info");
      ColorButton_4("dark");
      ColorButton_5({ backgroundColor: "brown", color: "yellow" });
      ColorButton_6({ backgroundColor: "yellow", color: "black" });
      // ColorButton_7()
      setTimeout(() => {
        document.querySelector(".alert").hidden = true;
      }, 2000);
      document.querySelector(".alert").hidden = false;
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar styling={Object} Text={Object.text} Website_Name="Textutils" />
        <div className="Container" style={{ height: "8vh" }}>
          <AlertComponent message={Message} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Textarea styling={Object} val={Text} />
                <UpperCaseButton color={Button_1} />
                <LowerCaseButton color={Button_2} />
                <CopyButton color={Button_3} />
                <WordCountButton color={Button_4} />
                <ExtraSpaceRemove color={Button_5} />
                <SpecialCharecterRemove color={Button_6} />
                {/* <UpperCaseButton disable={Bool} color={Button_1} />
                <LowerCaseButton disable={Bool} color={Button_2} />
                <CopyButton disable={Bool} color={Button_3} />
                <WordCountButton disable={Bool} color={Button_4} /> */}
                <OutputSection styling={Object} Para={Text_2} />
              </>
            }
          />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
export { click };
export { click_2 };
export { Copy };
export { Change_Text };
export { Dark_Mode };
export { Word_Counter };
export { Extra_Spaces_Remover };
export { Special_Charecter_Remover };
