export class SectionsState {
  sectionState = (section, state) => {
    state ?
      section.classList.add('active') :
      section.classList.remove('active');
  }
}