import { renderComponent , expect } from '../test_helper';
import { toggleProject } from '../../src/actions';
import CardProject from '../../src/components/card_project';

describe('CardProject' , () => {
  let component;

  beforeEach(() => {
  	const props = {name: 'card title', tags : 'tag1, tag2', onClick : toggleProject}
    component = renderComponent(CardProject, props);
  });

  it('has a title and a description', () => {
  	expect(component.find('h4')).to.have.class('card-title').and.contain('card title');
  	
  });

  it('has a link and tags', () => {
  	expect(component.find('a')).to.exist;
  	expect(component.find('p')).to.contain('tag1, tag2');	
  });
  
});
