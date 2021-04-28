import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display'

const App = () => {

  const [displayValue, setDisplayValue] = useState(0)

  addDigit = n => {
    setDisplayValue(n)
  }

  clearmemory = () => {
    setDisplayValue(0)
  }

  setOperation = operation => {

  }


  return (
    <SafeAreaView style={styles.container}>
      <Display value={displayValue}/>
      <View style={styles.buttons}>
        <Button label='AC' triple onClick={this.clearmemory}/>
        <Button label='/' operation onClick={() => this.setOperation('/')}/>
        <Button label='7' onClick={() => this.addDigit(7)} />
        <Button label='8' />
        <Button label='9' />
        <Button label='*' />
        <Button label='4' />
        <Button label='5' />
        <Button label='6' />
        <Button label='-' />
        <Button label='1' />
        <Button label='2' />
        <Button label='3' />
        <Button label='+' />
        <Button label='0' double/>
        <Button label='.' />
        <Button label='=' />
      </View>
    </SafeAreaView>
  );
};

export default App

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',

    }
})