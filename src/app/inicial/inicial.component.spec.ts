import { HarnessLoader, parallel } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatCardModule } from '@angular/material/card';
import { MatCardHarness } from '@angular/material/card/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { InicialComponent } from './inicial.component';

describe('InicialComponent', () => {
  let fixture: ComponentFixture<InicialComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatButtonModule,
        NoopAnimationsModule,
      ],
      declarations: [InicialComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(InicialComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should find card with text', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness.with({ text: /geralmente referenciados em textos/ }));
    expect(cards.length).toBe(1);
    expect(await cards[0].getTitleText()).toBe('Vira-lata');
  });

  it('should get subtitle text', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness);
    expect(await parallel(() => cards.map(card => card.getSubtitleText()))).toEqual([
      'Raça de cachorro'
    ]);
  });

  it('should act as a harness loader for user content', async () => {
    const card = await loader.getHarness(MatCardHarness.with({ title: 'Vira-lata' }));
    const footerSubcomponents = await card.getAllHarnesses(MatButtonHarness) ?? [];
    expect(footerSubcomponents.length).toBe(2);
  });
});
