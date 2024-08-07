import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
const MAX_DISPLAY_LENGTH = 13;
export default function App() {
  const [displayValue, setDisplayValue] = useState("");
  const handleButtonPress = (value) => {
    if (displayValue.length < MAX_DISPLAY_LENGTH) {
      setDisplayValue(displayValue + value);
    }
  };
  const calculateValue = () => {
    try {
      let result = eval(displayValue);
      if (result.toString().length > MAX_DISPLAY_LENGTH) {
        setDisplayValue("Error");
      } else {
        setDisplayValue(result.toString());
      }
    } catch (error) {
      setDisplayValue("Error");
    }
  };
  const clearDisplay = () => {
    setDisplayValue("");
  };
  const backspace = () => {
    setDisplayValue(displayValue.slice(0, -1));
  };
  return (
    <View style={styles.wrapper}>
      <StatusBar />
      {displayValue.length >= MAX_DISPLAY_LENGTH - 2 ? (
        <Text style={styles.heading}>Numbers upto 13 digits are allowed</Text>
      ) : (
        <Text style={styles.heading}>Calculator App by Subhajit Sarkar</Text>
      )}
      <TextInput
        cursorColor="green"
        editable={false}
        showSoftInputOnFocus={false}
        value={displayValue}
        style={styles.display}
      />
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={() => handleButtonPress("9")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("8")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("7")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("+")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={() => handleButtonPress("6")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("5")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("4")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("-")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={() => handleButtonPress("3")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("2")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("1")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("*")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={() => handleButtonPress("%")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("0")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("/")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={backspace} style={styles.btn}>
          <Text style={styles.btnText}>⌫</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={calculateValue} style={styles.equalBtn}>
          <Text style={[styles.btnText, { color: "white" }]}>=</Text>
        </TouchableOpacity>
        <View style={styles.lastBtns}>
          <TouchableOpacity
            onPress={() => handleButtonPress(".")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={clearDisplay}
            style={[styles.btn, { backgroundColor: "red" }]}
          >
            <Text style={[styles.btnText, { color: "white" }]}>AC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: "#eee",
    justifyContent: "flex-end",
  },
  heading: {
    fontSize: 18,
    color: "black",
    alignSelf: "center",
    padding: 10,
  },
  display: {
    width: "100%",
    height: 245,
    color: "#000",
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "right",
    fontSize: 40,
    padding: 10,
  },
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  btn: {
    height: 80,
    width: 80,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  equalBtn: {
    width: 166,
    height: 80,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  lastBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 167,
  },
});
