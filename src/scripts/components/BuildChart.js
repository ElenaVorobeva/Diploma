export class BuildChart {
  constructor(container, chart) {
    this._container = container;
    this._chart = chart;
  }

  render = () => {
    this._container.append(this._chart);
  }
}