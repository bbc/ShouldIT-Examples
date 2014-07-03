<?php


class phpUnitExampleTest extends PHPUnit_Framework_TestCase
{

    public function testWeCanAddTwoNumbers()
    {
        $this->assertEquals(2, 1 + 1);
    }

    public function testWeBuildAString()
    {
        $theString = join(array("A", " String"));
        $this->assertEquals("A String", $theString);
    }
}
