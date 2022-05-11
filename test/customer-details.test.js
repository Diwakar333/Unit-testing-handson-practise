import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block

  
  it('checks for handlers', async()=>{
    const el=await fixture(html`<customer-details></customer-details>`);
    // const spy=Sinon.spy(el,'submitHandler');
    // const tags= el.shadowRoot.querySelector('lion-input')[0];
    // tags.click();
    // expect(spy.calledOnce).to.be.true;
    await el.shadowRoot.querySelector('#nextbtn').click();
  });

  
  it('should contain valid characters in FirstName', async()=>{
    const el=await fixture(html`<lion-input label="${localize.msg('change-language:firstname')}"></lion-input>`);
    await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
  });

   it('should contain valid characters in LastName', async()=>{
     const el=await fixture(html`<lion-input label="${localize.msg('change-language:lastname')}"></lion-input>`);
     await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
   });

    it('should contain valid characters in Email', async()=>{
     const el=await fixture(html`<lion-input-email label="${localize.msg('change-language:email')}"></lion-input-email>`);
     await expect(el.label).to.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/);// + @[a-zA-Z0-9-] + (?:\.[a-zA-Z0-9-]+)*$/);
  });

  
  it('should contain valid characters in mobile', async()=>{
    const el= await fixture(html`<lion-input label="${localize.msg('change-language:mobilenumber')}"></lion-input>`);
     await expect(el.label).to.match(/6|7|8|9|/);// + @[a-zA-Z0-9-] + (?:\.[a-zA-Z0-9-]+)*$/);
 });

 it('should contain the amount field',async()=>{
  const el=await fixture(html`<lion-input-amount label="${localize.msg('change-language:monthlysalary')}"></lion-input-amount>`);
  await expect(el.label).to.equal('Monthly Salary');
 });

 
 it('should contain the amount field',async()=>{
  const el=await fixture(html`<lion-input-amount label="${localize.msg('change-language:previousemi')}"></lion-input-amount>`);
  await expect(el.label).to.equal('Previous EMIs Amount');
 });


 
 it('checks for emi details', async()=>{
  const el=await fixture(html`<customer-details></customer-details>`);
  // const spy=Sinon.spy(el,'submitHandler');
  // const tags= el.shadowRoot.querySelector('lion-input')[0];
  // tags.click();
  // expect(spy.calledOnce).to.be.true;
  await el.shadowRoot.querySelector('.backbg-btn-color').click();
});

});
