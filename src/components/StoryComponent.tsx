import * as React from "react";

interface StoryComponentProps {
   name: string;
   remove: any;
   saved: boolean;
}

interface StoryComponentState {
   tasks: string[];
   saved: boolean;
   editing: boolean;
   text: string;
}

export class StoryComponent extends React.Component<StoryComponentProps, StoryComponentState> {

   private counter = 0;

   constructor(props: StoryComponentProps) {
      super(props);
      this.state = {
         text: this.props.name,
         tasks: [],
         saved: props.saved,
         editing: false
      }
      this.addTask = this.addTask.bind(this);
      this.onBlur = this.onBlur.bind(this);
      this.onFocus = this.onFocus.bind(this);
      this.handleNameInput = this.handleNameInput.bind(this);

   }

   refs: {
      [key: string]: (Element);
      plus: (HTMLDivElement);
   }

   public index: number = 0;

   public addTask() {
      const newTaskName = "T" + this.props.name + " " + (this.counter++).toString();
      this.setState({ tasks: [...this.state.tasks, newTaskName] })
   }

   public onBlur() {
      this.setState({ editing: false })
   }
   public onFocus() {
      this.setState({ editing: true });
   }

   public handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
      this.setState({
         text: e.currentTarget.value
      })
   }

   render() {
      const focusClass = this.state.editing ? " focus" : "";
      const classNames = `story card ${focusClass}`;

      return <div className="story-container">
         <div className={classNames}>
            <input
               onBlur={this.onBlur}
               onFocus={this.onFocus}
               onChange={this.handleNameInput}
               value={this.state.text} />
            <div tabIndex={this.index} className="delete" onClick={() => this.props.remove(this.props.name)}></div>
            <div ref="plus" className="plus" onClick={this.addTask}></div>
         </div>
         {this.state.tasks.map(task => <div className="task card">{task}</div>)}
      </div>
   }

}