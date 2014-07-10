<?php


class PhpUnitExampleTest extends PHPUnit_Framework_TestCase
{
    public function testShouldBeAbleToAddTwoNumbers()
    {
       $this->assertEquals(2, 1 + 1);
    }

    public function testShouldHaveATest()
    {

        $this->assertEquals(2, 2);
    }
}
