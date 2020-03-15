import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'appActions'
import QuestList from '../components/QuestList'

class QuestListContainer extends Component {
    render() {
        return <QuestList {...this.props} />
    }
}

const mapStateToProps = state => ({
    quests: state.quest.questList
})

const mapDispatchToProps = dispatch => ({
    getQuests: () => dispatch(actions.QUEST.QUEST_GET_ALL_REQUEST())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestListContainer)
