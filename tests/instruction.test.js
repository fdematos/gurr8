const opcode = require("../src/instruction");

describe("Decode tests", () => {
  test("00EE - CALL SUB ROUTINE", () => {
    const { instruction, withArgs } = opcode.decode(0x00ee);
    expect(instruction.id).toBe("00EE");
    expect(withArgs.length).toBe(0);
  });

  test("00E0 - CLEAR SCREEN", () => {
    const { instruction, withArgs } = opcode.decode(0x00e0);
    expect(instruction.id).toBe("00E0");
    expect(withArgs.length).toBe(0);
  });

  test("1NNN - JUMP", () => {
    const { instruction, withArgs } = opcode.decode(0x1333);
    expect(instruction.id).toBe("1NNN");
    expect(withArgs[0]).toBe(0x333);
  });

  test("2NNN - CALL SUB ROUTINE", () => {
    const { instruction, withArgs } = opcode.decode(0x2134);
    expect(instruction.id).toBe("2NNN");
    expect(withArgs[0]).toBe(0x134);
  });

  test("3XNN -IF EQUAL", () => {
    const { instruction, withArgs } = opcode.decode(0x3acb);
    expect(instruction.id).toBe("3XNN");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0xa);
    expect(withArgs[1]).toBe(0xcb);
  });

  test("4XNN -IF NOT EQUALS", () => {
    const { instruction, withArgs } = opcode.decode(0x4acb);
    expect(instruction.id).toBe("4XNN");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0xa);
    expect(withArgs[1]).toBe(0xcb);
  });

  test("5XY0 -IF VX EQUALS VY", () => {
    const { instruction, withArgs } = opcode.decode(0x57a0);
    expect(instruction.id).toBe("5XY0");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0x7);
    expect(withArgs[1]).toBe(0xa);
  });

  test("6XNN - SET VALUE TO REGISTER", () => {
    const { instruction, withArgs } = opcode.decode(0x6312);
    expect(instruction.id).toBe("6XNN");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0x3);
    expect(withArgs[1]).toBe(0x12);
  });

  test("7XNN - ADD VALUE TO REGISTER", () => {
    const { instruction, withArgs } = opcode.decode(0x7acf);
    expect(instruction.id).toBe("7XNN");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0xa);
    expect(withArgs[1]).toBe(0xcf);
  });

  test("8XY0 - SET VX TO VY", () => {
    const { instruction, withArgs } = opcode.decode(0x87a0);
    expect(instruction.id).toBe("8XY0");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0x7);
    expect(withArgs[1]).toBe(0xa);
  });

  test("8XY1 - SET VX TO VX bitwise OR VY", () => {
    const { instruction, withArgs } = opcode.decode(0x87a1);
    expect(instruction.id).toBe("8XY1");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0x7);
    expect(withArgs[1]).toBe(0xa);
  });

  test("8XY2 - SET VX TO VX bitwise AND VY", () => {
    const { instruction, withArgs } = opcode.decode(0x87a2);
    expect(instruction.id).toBe("8XY2");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0x7);
    expect(withArgs[1]).toBe(0xa);
  });

  test("8XY3 - SET VX TO VX bitwise XOR VY", () => {
    const { instruction, withArgs } = opcode.decode(0x87a3);
    expect(instruction.id).toBe("8XY3");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0x7);
    expect(withArgs[1]).toBe(0xa);
  });

  test("8XY4 - SET VX TO VX + VY", () => {
    const { instruction, withArgs } = opcode.decode(0x87a4);
    expect(instruction.id).toBe("8XY4");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0x7);
    expect(withArgs[1]).toBe(0xa);
  });

  test("8XY5 - SET VX TO VX - VY", () => {
    const { instruction, withArgs } = opcode.decode(0x87a5);
    expect(instruction.id).toBe("8XY5");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0x7);
    expect(withArgs[1]).toBe(0xa);
  });

  test("8XY6 - SHIFT VX RIGHT", () => {
    const { instruction, withArgs } = opcode.decode(0x87a6);
    expect(instruction.id).toBe("8XY6");
    expect(withArgs.length).toBe(1);
    expect(withArgs[0]).toBe(0x7);
  });

  test("8XY7 - SET VX TO VY - VX", () => {
    const { instruction, withArgs } = opcode.decode(0x87a7);
    expect(instruction.id).toBe("8XY7");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0x7);
    expect(withArgs[1]).toBe(0xa);
  });

  test("8XYE - SHIFT VX LEFT", () => {
    const { instruction, withArgs } = opcode.decode(0x87ae);
    expect(instruction.id).toBe("8XYE");
    expect(withArgs.length).toBe(1);
    expect(withArgs[0]).toBe(0x7);
  });

  test("9XY0 -IF VX NOT EQUALS VY", () => {
    const { instruction, withArgs } = opcode.decode(0x97a0);
    expect(instruction.id).toBe("9XY0");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0x7);
    expect(withArgs[1]).toBe(0xa);
  });

  test("ANNN - SET INDEX REGISTER", () => {
    const { instruction, withArgs } = opcode.decode(0xa123);
    expect(instruction.id).toBe("ANNN");
    expect(withArgs[0]).toBe(0x123);
  });

  test("CXNN - RANDOM", () => {
    const { instruction, withArgs } = opcode.decode(0xcacf);
    expect(instruction.id).toBe("CXNN");
    expect(withArgs.length).toBe(2);
    expect(withArgs[0]).toBe(0xa);
    expect(withArgs[1]).toBe(0xcf);
  });

  test("BNNN - JUMP TO NNN + V0", () => {
    const { instruction, withArgs } = opcode.decode(0xb123);
    expect(instruction.id).toBe("BNNN");
    expect(withArgs.length).toBe(1);
    expect(withArgs[0]).toBe(0x123);
  });

  test("DXYN - DRAW AT", () => {
    const { instruction, withArgs } = opcode.decode(0xd123);
    expect(instruction.id).toBe("DXYN");
    expect(withArgs.length).toBe(3);
    expect(withArgs[0]).toBe(0x1);
    expect(withArgs[1]).toBe(0x2);
    expect(withArgs[2]).toBe(0x3);
  });
});
