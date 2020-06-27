import React, {Component} from 'react'
import { View, 
    Text, 
    ImageBackground, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity,
    Platform,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles'
import Task from '../components/Task'


export default class TaskList extends Component {

    state = {
        showDoneTasks : true,
        visibleTasks : [],
        tasks: [{
            id: Math.random(),
            desc: "Comprar livro",
            estimateAt: new Date(),
            doneAt: new Date(),
        },{
            id: Math.random(),
            desc: "Recolher roupa",
            estimateAt: new Date(),
            doneAt: null,
        }],
    }


    componentDidMount = () => {
        this.filterTasks()
    }


    toggleFilter = () => {
        this.setState({showDoneTasks : !this.state.showDoneTasks}, this.filterTasks) //inverte o bool de showDoneTasks
    }
   
    
    filterTasks = () => {
        let visibleTasks = null
        if(this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        }else{
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending)
        }
        this.setState({visibleTasks})
    }


    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if(task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })
        this.setState({tasks}, this.filterTasks)
    }


    render() {

        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={todayImage}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks ? "eye" : "eye-slash"}
                            size={20} color={commonStyles.colors.secondary}/> 
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask} />}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7,
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 25,
        marginLeft: 20,
        marginBottom: 25
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: Platform.OS === 'ios' ? 45 : 10,
        justifyContent: 'flex-end',
    }
})